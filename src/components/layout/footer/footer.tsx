import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import {
  FooterContainer,
  IconContainer,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon
} from './footer.styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </IconContainer>
    </FooterContainer>
  )
}

export default Footer
