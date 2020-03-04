import { NextPage } from 'next'
import Header from './header'
import Nav from './nav'
import Footer from './footer'

import { LayoutContainer, LayoutBody } from './layout.styles'

const Layout: NextPage = ({ children }) => {
  return (
    <LayoutContainer>
      <Nav />
      <LayoutBody>{children}</LayoutBody>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
