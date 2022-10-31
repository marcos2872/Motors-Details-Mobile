import React from 'react'
import { Container, InputText, Menu } from './styled'
import menuIcon from '../../assets/menu.png'

export default function index() {
  return (
    <Container>
      <Menu source={menuIcon} />
      <InputText />
    </Container>
  )
}