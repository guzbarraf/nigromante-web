import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import { Columns, Column, Field, Control, Input, TextArea, Help, Button, Modal, ModalBackground, ModalContent, ModalClose } from 'bloomer';
import { ContImage, GlobalStyleContacto } from "./styles";
import { TextTitle } from "../../styles/GlobalStyles";
import { ContForm } from "./styles";
import { useInput } from '../Inputs';

import imagen from '../../assets/esfera.png';


var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()
dotenvExpand(myEnv)

const URL_API_CONTACT_FILE = process.env.REACT_APP_URL_API_CONTACT_FILE;
console.log(`URL_API_CONTACT_FILE => ${URL_API_CONTACT_FILE}`);

function useContacto(form, sendForm, objForm){
  const [ contacto, setContacto ] = useState([])
  const [ sending, setSending ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)

  //console.log("sendForm => ", sendForm);
  //console.log("objForm.txtNombre => ", objForm.txtNombre);

  useEffect(function(){
    if(sendForm){
      setSending(true)
      setError(false)

      document.getElementById('btn-enviar').disabled = true;

      /*
      const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "credentials": 'omit',
        'Content-Type': 'application/json; charset=UTF-8'
      });

      const varInitFecth = {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: myHeaders,
        body: JSON.stringify(form)
        //body: `name=${form.name}&email=${form.email}&message=${form.message}`
      };

      console.log('useEffect->form => ', form)
      console.log('JSON.stringify(form) => ', JSON.stringify(form))
      console.log('name => ', form.name)

      fetch(URL_API_CONTACT_FILE, varInitFecth)
        .then(response => {
          // Handle the response and return the data
          setContacto(response)
          setSending(false)
          setError(false)
          console.log('response => ', response)
        })
        .then(data => {
          // Handle the data that is returned from the server
          setContacto(data)
          setSending(false)
          setError(false)
          console.log('data => ', data)
        })
        .catch(err => {
          // Handle the error, if any
          setSending(false)
          setError(true)
          console.error('Error:', err)
        }
      );*/

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      //console.log("objForm.txtNombre => ", objForm.txtNombre);

      /*let formdata = new FormData();
      formdata.append("name", objForm.txtNombre);
      formdata.append("email", objForm.txtEmail);
      formdata.append("message", objForm.txtMensaje);*/

      let requestOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow',
        headers: myHeaders,
        //body: formdata
        body: JSON.stringify({
          name: objForm.txtNombre,
          email: objForm.txtEmail,
          message: objForm.txtMensaje
        })
      };

      fetch(URL_API_CONTACT_FILE, requestOptions)
        .then(res => {
          //console.log('res => ', res);
          if(res.ok){
            //console.log('Success')
            return res.json();
          }else{
            //console.log('Not Successful');
            throw "Error en la llamada";
          }
        })
        .then(function(data) {
          //console.log('data => ', data);
          //console.log('message => ', data.response.data.message);
          const msg = data.response.data.message;
          fnModal(msg);
          setShowModal(true)
        })
        .catch(error => console.error('error', error));

    }
  }, [sendForm])

  return { contacto, sending, error, showModal }
}

function fnModal(msg){
  let div = document.getElementById('modal-content-msg');
  div.innerHTML = msg;
}

export const ContactComp = () => {
  const [ form, setForm ] = useState([])
  const [ sendForm, setSendForm ] = useState(false)
  const [ objForm, setObjForm ] = useState([])

  let { contacto, sending, error, showModal } = useContacto(form, sendForm, objForm)

  const { value:name, bind:bindName, reset:resetName } = useInput('');
  const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
  const { value:message, bind:bindMessage, reset:resetMessage } = useInput('');

  //console.log('sending => ', sending);
  //console.log('showModal => ', showModal);
  //setBoolModal(showModal)

  function fnEliminaEspacios(cadena){
    while(cadena.charAt(cadena.length-1) === " ") cadena=cadena.substr(0, cadena.length-1);
    while(cadena.charAt(0) === " ") cadena=cadena.substr(1, cadena.length-1);
    return cadena;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setForm({"name": name, "email": email, "message": message})

    let txtNombre = document.getElementById("txtNombre").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtMensaje = document.getElementById("txtMensaje").value;
    txtNombre = fnEliminaEspacios(txtNombre);
    txtEmail = fnEliminaEspacios(txtEmail);
    txtMensaje = fnEliminaEspacios(txtMensaje);

    document.getElementById('msgNombre').classList.add('help_display_no');
    document.getElementById('msgEmail').classList.add('help_display_no');
    document.getElementById('msgMensaje').classList.add('help_display_no');

    if(txtNombre == null || txtNombre.length === 0 || /^\s+$/.test(txtNombre)){
      document.getElementById('msgNombre').classList.remove('help_display_no');
      document.getElementById('txtNombre').focus();
      return false;
    }
    if(txtEmail == null || txtEmail.length === 0 || /^\s+$/.test(txtEmail)){
      document.getElementById('msgEmail').classList.remove('help_display_no');
      document.getElementById('txtEmail').focus();
      return false;
    }else{
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txtEmail)){
        if(txtMensaje == null || txtMensaje.length === 0 || /^\s+$/.test(txtMensaje)){
          document.getElementById('msgMensaje').classList.remove('help_display_no');
          document.getElementById('txtMensaje').focus();
          return false;
        }


        let objForm = {
          txtNombre: txtNombre,
          txtEmail: txtEmail,
          txtMensaje: txtMensaje
        };
        setObjForm(objForm);
        setSendForm(true);


        if(!error){
          //console.log('contacto => ', contacto)
        }

        if(!sending){
          resetName();
          resetEmail();
          resetMessage();
        }

        return false;
      }else{
        document.getElementById('msgEmail').classList.remove('help_display_no');
        document.getElementById('txtEmail').focus();
        return false;
      }
    }
  }

  function fnCloseModal(s){
    document.getElementById('modal-msg').classList.remove('is-active');
    return !s;
  }

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
              <form id="frmContacto" onSubmit={handleSubmit}>
                <Field>
                  <Control>
                    <Input type="text" id="txtNombre" name="txtNombre" placeholder='Nombre' {...bindName} />
                  </Control>
                  <Help id='msgNombre' isColor='danger' className='help_display_no'>Escribe tu nombre</Help>
                </Field>

                <Field>
                  <Control>
                    <Input type="email" id="txtEmail" name="txtEmail" placeholder='e-mail' {...bindEmail} />
                  </Control>
                  <Help id='msgEmail' isColor='danger' className='help_display_no'>Escribe tu email</Help>
                </Field>

                <Field>
                  <Control>
                    <TextArea id="txtMensaje" name="txtMensaje" placeholder={'Mensaje'} {...bindMessage} />
                  </Control>
                  <Help id='msgMensaje' isColor='danger' className='help_display_no'>Escribe tu mensaje</Help>
                </Field>

                <Field isGrouped>
                  <Control>
                    <Button type="submit" id="btn-enviar" className='btn-enviar'>Enviar</Button>
                  </Control>
                </Field>
              </form>
            </ContForm>
          </Column>
        </Columns>
      </div>

      <Modal id="modal-msg" isActive={showModal}>
        <ModalBackground />
        <ModalContent>
          <div id='modal-content-msg'>
            Any other Bulma elements you want
          </div>
        </ModalContent>
        <ModalClose onClick={() => showModal = fnCloseModal(showModal)}/>
      </Modal>
    </div>
  )
}