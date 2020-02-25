import React from 'react'
import Layout from '../components/Layout'
import { NotFoundComp } from '../components/Notfound'

export const Notfound = () => {
  return (
    <Layout
      title='La página no existe'
      subtitle='Y regresarán a la vida despues de probar nuestra cerveza'
      works='Beer. Cfrat Beer, Cerveza, cerveza Artesanal, Ipa, American Ipa, Stout, Imperial Stout, Y regresarán a la vida después de probar nuestra cerveza, Huna Hop, Ahypihey, Maestro Diablero'
    >
      <NotFoundComp/>
    </Layout>
  )
}
