import React from 'react'
import Layout from '../components/Layout'
import { CervezasComp } from '../components/Cervezas'

const CervezasPage = () => {
  return (
    <Layout
      title='Cervezas'
      subtitle='Y regresarán a la vida despues de probar nuestra cerveza'
      works='Beer. Cfrat Beer, Cerveza, cerveza Artesanal, Ipa, American Ipa, Stout, Imperial Stout, Y regresarán a la vida después de probar nuestra cerveza, Huna Hop, Ahypihey, Maestro Diablero'
    >
      <CervezasComp/>
    </Layout>
  )
}

export const Cervezas = React.memo(CervezasPage, (prevProps, props) => {
  return prevProps.id === props.id
})