import React from 'react'
import {ContactComp} from "../components/Contact";
import Layout from "../components/Layout";

const ContactoPage = () => {
  return (
    <Layout
      title='Contacto'
      subtitle='Escríbenos'
      works='Contacto'
    >
      <ContactComp/>
    </Layout>
  )
}

export const Contacto = React.memo(ContactoPage, (prevProps, props) => {
  return prevProps.id === props.id
})