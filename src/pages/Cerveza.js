import React from 'react'
import Layout from '../components/Layout'
import CervezaComp from '../components/Cervezas/cerveza'

const CervezaPage = ( { idBeer } ) => {
  return (
    <Layout
      title='Cerveza - '
      subtitle='Y regresarán a la vida despues de probar nuestra cerveza'
      works='Beer. Cfrat Beer, Cerveza, cerveza Artesanal, Ipa, American Ipa, Stout, Imperial Stout, Y regresarán a la vida después de probar nuestra cerveza, Huna Hop, Ahypihey, Maestro Diablero'
    >
      <CervezaComp idBeer={idBeer}/>
    </Layout>
  )
}

export const Cerveza = React.memo(CervezaPage, (prevProps, props) => {
  return prevProps.idBeer === props.idBeer
})