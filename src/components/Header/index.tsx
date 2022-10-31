import React, { useState } from 'react'
import { Button, Container, InputText, Menu } from './styled'
import menuIcon from '../../assets/menu.png'

export default function index() {
  return (
    <Container>
      <Button>
      <Menu source={menuIcon} />
      </Button>
      <InputText placeholder='Digite algo' />
    </Container>
  )
}