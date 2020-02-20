import React from 'react'
import Layout  from '../components/Layout'
import { HomeComp } from '../components/Home';

const HomePage = () => {
  return (
    <Layout
      title='Inicio'
      subtitle='Y regresarán a la vida despues de probar nuestra cerveza'
      works='Beer. Cfrat Beer, Cerveza, cerveza Artesanal, Ipa, American Ipa, Stout, Imperial Stout, Y regresarán a la vida después de probar nuestra cerveza, Huna Hop, Ahypihey, Maestro Diablero'
    >
      <HomeComp/>
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})