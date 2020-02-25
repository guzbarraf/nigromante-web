import React from 'react'
import Layout from '../components/Layout'
import { PoisonComp } from '../components/Posiones/posion'

const PosionPage = ( { idBeer } ) => {
  return (
    <Layout
      title='Posión - '
      subtitle='Y regresarán a la vida despues de probar nuestra cerveza'
      works='Beer. Cfrat Beer, Cerveza, cerveza Artesanal, Ipa, American Ipa, Stout, Imperial Stout, Y regresarán a la vida después de probar nuestra cerveza, Huna Hop, Ahypihey, Maestro Diablero'
    >
      { idBeer }
      <PoisonComp idBeer={idBeer}/>
    </Layout>
  )
}

export const Posion = React.memo(PosionPage, (prevProps, props) => {
  return prevProps.idBeer === props.idBeer
})