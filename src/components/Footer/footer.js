import React, { useRef } from 'react';
import useVisibilitySensor from '@rooks/use-visibility-sensor';
import * as S from './footer.styled';
import etcLogo from '../../images/etc-logo-white.svg';
import Icon from '../../images/icons';

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.Img src={etcLogo} />
        <S.AddressContainer>
          <p>
            Alameda Lorena, 514-B
            <br />
            Jardim Paulista, São Paulo - SP 01424-00
            <br />
            01424-002
          </p>
          <p>
            R. Padre Albuquerque, 1111 - 1º Andar
            <br />
            Centro, Itapetininga - SP
            <br />
            18200-075
          </p>
        </S.AddressContainer>
        <S.SocialContainer>
          <a href="https://pt-br.facebook.com/entrecliques" target="_blank" rel="noopener noreferrer" id="social-facebook">
            <img src={Icon.facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/qentrecliques" target="_blank" rel="noopener noreferrer" id="social-instagram">
            <img src={Icon.instagram} alt="" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511948583630" target="_blank" rel="noopener noreferrer" id="social-whatsapp">
            <img src={Icon.whatsapp} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/entrecliques/" target="_blank" rel="noopener noreferrer" id="social-linkedin">
            <img src={Icon.likedin} alt="" />
          </a>
          <p>(15) 3527-2005 | (11) 94858-3630</p>
        </S.SocialContainer>
      </div>
      <div>
        <S.MapContainer>
          <S.MapIframe src="https://www.google.com/maps/d/u/0/embed?mid=19iE1VWBzkIxPxjQbMOwM-Tb86_K985KZ"></S.MapIframe>
        </S.MapContainer>
      </div>
    </S.Footer>
  );
}

export default Footer;
