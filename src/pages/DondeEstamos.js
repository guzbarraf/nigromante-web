import React from 'react'
//import { Layout } from '../components/Layout'

const DondeEstamosPage = () => {
  return (
    <div>
        Esta es la página de DondeEstamos
    </div>
  )
}

export const DondeEstamos = React.memo(DondeEstamosPage, (prevProps, props) => {
  return prevProps.id === props.id
})