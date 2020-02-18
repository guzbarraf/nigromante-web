import React from 'react'
import {DondeComp} from "../components/DondeEstamos";
import Layout from "../components/Layout";

const DondeEstamosPage = () => {
  return (
    <Layout
      title='Donde Estamos?'
      subtitle='Nuestras cervezas las encuentras en...'
      works='Nigromante Brewing se vende en, donde encuentro cerveza nigromante'
    >
      <DondeComp/>
    </Layout>
  )
}

export const DondeEstamos = React.memo(DondeEstamosPage, (prevProps, props) => {
  return prevProps.id === props.id
})