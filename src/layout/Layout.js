import React from 'react'
import Theme from '../styles/theme';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Theme>
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
    </Theme>    
  )
}
