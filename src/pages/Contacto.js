import React from 'react'
//import { Layout } from '../components/Layout'

const ContactoPage = () => {
  return (
    <div>
        Esta es la página de Contacto
    </div>
  )
}

export const Contacto = React.memo(ContactoPage, (prevProps, props) => {
  return prevProps.id === props.id
})