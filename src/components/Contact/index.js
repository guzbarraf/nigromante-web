import React, { useEffect, useState } from 'react';
import { Columns, Column, Field, Control, Input, TextArea, Help, Button } from 'bloomer';
import { ContImage, GlobalStyleContacto } from "./styles";
import { TextTitle } from "../../styles/GlobalStyles";
import { ContForm } from "./styles";

import imagen from '../../assets/esfera.png';


var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()
dotenvExpand(myEnv)
console.log(myEnv)


const URL_API_CONTACT_FILE = process.env.URL_API_CONTACT_FILE;
console.log(`${URL_API_CONTACT_FILE}`);



function useContacto(){
  const [ contacto, setContacto ] = useState()
  const [ loading, setLoading ] = useState()
  const [ error, setError ] = useState()

  useEffect(function(){
    setLoading(true)
    setError(false)

    window
      .fetch(`${URL_API_CONTACT_FILE}`)
      .then(res => res.json())
      .then(response => {
        setContacto(response)
        setLoading(false)
        setError(false)
      }
    )
  }, [])

  return { contacto, loading, error }
}

export const ContactComp = () => {
  const { contacto, loading, error } = useContacto()

  console.log(`${URL_API_CONTACT_FILE}`);


  return (
    <div className="contact">
      <GlobalStyleContacto/>
      <TextTitle>Contacto</TextTitle>

      <div className="cont-contact">
        <Columns className="alto-100">
          <Column isSize={{mobile: 1, tablet: 1, desktop: 6 }} className="alto-100 cont-imagen">
            <ContImage>
              <img src={imagen} alt="" />
            </ContImage>
          </Column>
          <Column isSize={{mobile: 11, tablet: 11, desktop: 6 }}>
            <ContForm id="idFrmContacto">
              <Field>
                <Control>
                  <Input type="text" id="txtNombre" name="txtNombre" placeholder='Nombre' />
                </Control>
              </Field>

              <Field>
                <Control>
                  <Input type="email" id="txtEmail" name="txtEmail" placeholder='e-mail' />
                </Control>
                <Help isColor='danger'>This username is available</Help>
              </Field>

              <Field>
                <Control>
                  <TextArea id="txtMensaje" name="txtMensaje" placeholder={'Mensaje'} />
                </Control>
              </Field>

              <Field isGrouped>
                <Control>
                  <Button isColor='primary'>Enviar</Button>
                </Control>
              </Field>
            </ContForm>
          </Column>
        </Columns>
      </div>
    </div>
  )
}