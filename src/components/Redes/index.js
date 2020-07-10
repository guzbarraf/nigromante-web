import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ContRedes, ContRedesIcon, ALinkFacebook, ALinkTwitter, ALinkInstagram } from './styles';

export const Redes = props => (
    <ContRedes>
      <ContRedesIcon>
        <ALinkFacebook href="https://facebook.com/NigromanteBrewing" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </ALinkFacebook>
      </ContRedesIcon>
      <ContRedesIcon>
        <ALinkTwitter href="https://twitter.com/NigromanteBrew" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </ALinkTwitter>
      </ContRedesIcon>
      <ContRedesIcon>
        <ALinkInstagram href="https://instagram.com/NigromanteBrewing" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </ALinkInstagram>
      </ContRedesIcon>
    </ContRedes>
)