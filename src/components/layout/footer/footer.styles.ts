import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
`

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;

  svg {
    cursor: pointer;
    margin: 0 15px;
  }
`
export const FacebookIcon = styled(FontAwesomeIcon).attrs(() => ({
  icon: faFacebookSquare
}))`
  color: #3b5998;
`

export const TwitterIcon = styled(FontAwesomeIcon).attrs(() => ({
  icon: faTwitterSquare
}))`
  color: #00acee;
`
export const InstagramIcon = styled(FontAwesomeIcon).attrs(() => ({
  icon: faInstagramSquare
}))`
  color: #fb3958;
`
