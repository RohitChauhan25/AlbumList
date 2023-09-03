import React from 'react'
import { Container, Logo } from '../../styles/navBar'
import logo from '../../assets/images/Album (1).png'

const NavBar = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  )
}

export default NavBar
