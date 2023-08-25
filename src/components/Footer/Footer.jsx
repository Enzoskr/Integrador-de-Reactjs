import React from 'react'
import { FooterContainerStyled, FooterInnerText, FooterHelpStyled, FooterLiStyled, FooterUlStyled } from './FooterStyles'

const Footer = () => {
  return (
    <FooterContainerStyled>
            <FooterInnerText>
            "Patagloria es el eco eterno que me guía en cada paso de la vida."
            <img src="https://media.istockphoto.com/id/864398528/es/foto/patagonia-argentina-e-chilena.jpg?s=170667a&w=0&k=20&c=cRO7HfPdCPDBgPinSqiudYp1vbv3CydipZlqu7GyRM4="
            alt='photoFooter'/>
            </FooterInnerText>
            <FooterHelpStyled>
              <FooterUlStyled>necesitas ayuda?
                <FooterLiStyled> Whatsapp</FooterLiStyled>
                <FooterLiStyled> Preguntas Frecuentes</FooterLiStyled>
                <FooterLiStyled> Cambios y devoluciones</FooterLiStyled>
              </FooterUlStyled>
              <FooterUlStyled>nuestras redes
                <FooterLiStyled> Instagram</FooterLiStyled>
                <FooterLiStyled> Facebook</FooterLiStyled>
              </FooterUlStyled>

             
            </FooterHelpStyled>
       
    </FooterContainerStyled>
  )
}

export default Footer