import React, {useEffect, useState} from 'react';
import { IcoLeft } from "./ico-left";
import { IcoRight } from "./ico-right";
import { GlobalStyleSlide, Slide, ContBtnsSlide, Link, BtnSlide, Linea } from './styles';

const useIdBeerData = (idBeer) => {
  const [page, setPage] = useState([])

  // se utiliza cada vez que se reenderiza el componente
  useEffect(function(){

    (async function(){
      let response = await getIdBeerData(idBeer);
      setPage(response)
      //console.log('response => ', response);
    })();

    async function getIdBeerData(idBeer) {
      try {
        const arBeers = ['ahypihey', 'huna-hop', 'maestro-diablero'];
        let arResp = [];
        const MAX = (arBeers.length - 1);

        let i = arBeers.indexOf(idBeer);

        if(i === 0){
          arResp[0] = MAX;
          arResp[1] = i + 1;
        }else if(i === MAX){
          arResp[0] = i - 1;
          arResp[1] = 0;
        }else{
          arResp[0] = i - 1;
          arResp[1] = i + 1;
        }

        arResp[0] = arBeers[arResp[0]];
        arResp[1] = arBeers[arResp[1]];

        return arResp;
      } catch (error) {
        console.log('getBeerData => catch => ', error);
      }
    }

  }, [idBeer])

  return { page }
}

export const SlideItemComp = ( { idBeer } ) => {
  let { page } = useIdBeerData(idBeer)
  let pathPrev = `/cerveza/${page[0]}`;
  let pathNext = `/cerveza/${page[1]}`;

  return (
    <Slide>
      <GlobalStyleSlide/>
      <ContBtnsSlide>
        <Link to={pathPrev}>
          <BtnSlide>
            <IcoLeft/>
          </BtnSlide>
        </Link>
        <Link to={pathNext}>
          <BtnSlide>
            <IcoRight/>
          </BtnSlide>
        </Link>
      </ContBtnsSlide>

      <Linea/>

    </Slide>
  )
}
