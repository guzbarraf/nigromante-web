import React, { useEffect, useState } from 'react';
import { Columns, Column } from 'bloomer';
import { GlobalStyleCerveza, ContBeer, ImgBeer, TitleBeer, LabelTitle, IcoDesc, NameBeer, TextDesc, BeerDetails, BeerDetailsLabel, BeerDetailsText, BeerDetailsTextGlass, ContImgAvailable, ContImgGlass, ImgAvailable, ImgGlass, BeerTastingLabel, BeerTastingText, ImgPairing,LabelPairing, LabelNumberBeer } from './styles-cerveza';
import { SlideItemComp } from '../SlideItems'

const useBeerData = (idBeer) => {
  const [beer, setBeer] = useState([])
  const [pairing, setPairing] = useState([])
  const [loading, setLoading] = useState(true)

  //console.log(`useBeerData => `, idBeer);

  // se utiliza cada vez que se reenderiza el componente
  useEffect(function(){
    /*
    //window.fetch(import(`../../data/beer-${idBeer}.json`))
    window.fetch(`../../data/beer-${idBeer}.json`)
    .then(res => res.json())
    .then(
      (response) => {
        console.log('response => ', response);
        setBeer(response)
        setLoading(false)
      },
      (error) => {
        console.log('error => ', error);
        setLoading(false)
      }
    )
     */
    /*
    try {
      const response = import(`../../data/beer-${idBeer}.json`);
      console.log('response => ', response);
      //const json = await response.json();
      setBeer(response)
      setLoading(false)
    } catch (error) {
      console.log('componentWillMount => catch => ', error);
    }
    */

    (async function(){
      setLoading(true)
      let response = await getBeerData(idBeer);
      setBeer(response[0])
      setPairing(response[0].pairing)
      setLoading(false)
      //console.log('response = await getBeerData => ', response);
      //console.log('response[0].id => ', response[0].id);
    })();

    async function getBeerData(idBeer) {
      try {
        const response = import(`../../data/beer-${idBeer}.json`);
        //console.log('getBeerData => ', response);
        //const json = await response.json();
        return response;
      } catch (error) {
        console.log('getBeerData => catch => ', error);
      }
    }

  }, [idBeer])

  return { beer, loading, pairing }
}


export const CervezaComp = ( { idBeer } ) => {
  let { beer, loading, pairing } = useBeerData(idBeer)

  /*
  console.log(`beer = `, beer);
  if(page !== idBeer){
    console.log(`page = ${page} :: idBeer = ${idBeer}`);
  }*/

  let id = 0;
  let img = "";
  let available = "";
  let glass = "";

  try{
    id = beer.id;

    if(id > 0){
      img = <ImgBeer src={require(`../../assets/beers/${beer.img}`)} />
      available = <ImgAvailable src={require(`../../assets/${beer.available}`)} />
      glass = <ImgGlass src={require(`../../assets/${beer.glass}`)} />
    }
  }catch (error) {
    console.log('Error => ', error);
  }



  const renderRailing = () => (
    <Columns isCentered isMultiline>
      {
        loading
          ? <div></div>
          : pairing.map((p, i) =>
            <Column isSize={{mobile: 6, tablet: 4, desktop: 4 }} key={i}>
              <ContBeer>
                <ImgPairing src={require(`../../assets/beers/pairing/${p.img}`)} alt={`${p.name}`}/>
              </ContBeer>
              <LabelPairing>{ p.name }</LabelPairing>
            </Column>
          )
      }
    </Columns>
  )


  return (
    <div className="cerveza">
      <GlobalStyleCerveza/>

      <Columns className="cont-cerveza">
        <Column isSize={{mobile: 12, tablet: 12, desktop: 5 }}>
          <TitleBeer>{ beer.name }</TitleBeer>
        </Column>
        <Column isSize={{mobile: 12, tablet: 12, desktop: 5 }}>
          <ContBeer>
            { img }
          </ContBeer>
        </Column>
        <Column isSize={{mobile: 12, tablet: 12, desktop: 2 }}>
          <LabelNumberBeer>
            { beer.id < 10 ? `0${beer.id}` : beer.id }
          </LabelNumberBeer>
          <SlideItemComp idBeer={idBeer} />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <LabelTitle>DESCRIPCIÓN</LabelTitle>
          <IcoDesc>+</IcoDesc>
        </Column>
      </Columns>

      <Columns>
        <Column isSize={{mobile: 12, tablet: 12, desktop: 6 }}>
          <NameBeer>{ beer.name }</NameBeer>
          <TextDesc>{ beer.desc }</TextDesc>
        </Column>
        <Column isSize={{mobile: 12, tablet: 12, desktop: 6 }}>
          <BeerDetails>
            <Columns>
              <Column isSize={{mobile: 4, tablet: 4, desktop: 4 }}>
                <BeerDetailsLabel>Estilo</BeerDetailsLabel>
                <BeerDetailsText>{ beer.style }</BeerDetailsText>
              </Column>
              <Column isSize={{mobile: 4, tablet: 4, desktop: 4 }}>
                <BeerDetailsLabel>AVB</BeerDetailsLabel>
                <BeerDetailsText>{ beer.abv } %</BeerDetailsText>
              </Column>
              <Column isSize={{mobile: 4, tablet: 4, desktop: 4 }}>
                <BeerDetailsLabel>IBU`s</BeerDetailsLabel>
                <BeerDetailsText>{ beer.ibus }</BeerDetailsText>
              </Column>
            </Columns>
          </BeerDetails>
          <Columns>
            <Column isSize={{mobile: 6, tablet: 6, desktop: 6 }}>
              <BeerDetailsLabel>Disponible</BeerDetailsLabel>
              <ContImgAvailable>{ available }</ContImgAvailable>
              <BeerDetailsText>{ beer.available_size }</BeerDetailsText>
            </Column>
            <Column isSize={{mobile: 6, tablet: 6, desktop: 6 }}>
              <BeerDetailsLabel>Sírvase en</BeerDetailsLabel>
              <ContImgGlass>{ glass }</ContImgGlass>
              <BeerDetailsTextGlass>{ beer.glass_name }</BeerDetailsTextGlass>
            </Column>
          </Columns>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <LabelTitle>NOTAS DE CATA</LabelTitle>
          <IcoDesc>+</IcoDesc>
        </Column>
      </Columns>

      <Columns isCentered isMultiline>
        <Column isSize={{mobile: 12, tablet: 12, desktop: 8 }}>
          <Columns isCentered isMultiline>
            <Column isSize={{mobile: 12, tablet: 12, desktop: 8 }}>
              <BeerTastingLabel>Espuma:</BeerTastingLabel>
              <BeerTastingText>{ beer.foam }</BeerTastingText>
            </Column>
            <Column isSize={{mobile: 12, tablet: 12, desktop: 8 }}>
              <BeerTastingLabel>Visual:</BeerTastingLabel>
              <BeerTastingText>{ beer.view }</BeerTastingText>
            </Column>
            <Column isSize={{mobile: 12, tablet: 12, desktop: 8 }}>
              <BeerTastingLabel>Aroma:</BeerTastingLabel>
              <BeerTastingText>{ beer.smell }</BeerTastingText>
            </Column>
            <Column isSize={{mobile: 12, tablet: 12, desktop: 8 }}>
              <BeerTastingLabel>Gustativo:</BeerTastingLabel>
              <BeerTastingText>{ beer.taste }</BeerTastingText>
            </Column>
            <Column isSize={{mobile: 12, tablet: 12, desktop: 8 }}>
              <BeerTastingLabel>Regusto:</BeerTastingLabel>
              <BeerTastingText>{ beer.aftertaste }</BeerTastingText>
            </Column>
          </Columns>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <LabelTitle>MARIDAJE</LabelTitle>
          <IcoDesc>+</IcoDesc>
        </Column>
      </Columns>

      <div>
        { renderRailing() }
      </div>


    </div>
  )

}

export default CervezaComp;