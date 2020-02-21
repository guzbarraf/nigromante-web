import React from 'react'
import Layout from '../components/Layout'
import { PoisonsComp } from '../components/Posiones'

const PosionesPage = () => {
  return (
    <Layout
      title='Posiones'
      subtitle='Y regresarán a la vida despues de probar nuestra cerveza'
      works='Beer. Cfrat Beer, Cerveza, cerveza Artesanal, Ipa, American Ipa, Stout, Imperial Stout, Y regresarán a la vida después de probar nuestra cerveza, Huna Hop, Ahypihey, Maestro Diablero'
    >
      <PoisonsComp/>
    </Layout>
  )
}

export const Posiones = React.memo(PosionesPage, (prevProps, props) => {
  return prevProps.id === props.id
})