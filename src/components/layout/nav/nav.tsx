import Link from 'next/link'
import { NavContainer, Logo } from './nav.styles'

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Link href="/">
        <Logo src="/images/logo.png" alt="logo" />
      </Link>
      <Link href="/lessons">
        <a>Lessons</a>
      </Link>
    </NavContainer>
  )
}

export default Nav
