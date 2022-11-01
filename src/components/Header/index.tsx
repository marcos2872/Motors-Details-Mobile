import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, InputText, Menu } from './styled'
import menuIcon from '../../assets/menu.png'
import {toogleMenu, searchValue} from '../../redux/reducer/heade'

export default function index() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const {isMenu} = useSelector(( {menu} ) => menu)
  
  return (
    <Container>
      <Button onPress={() => {
        dispatch(toogleMenu(!isMenu))
      }} >
      <Menu source={menuIcon} />
      </Button>
      <InputText
      placeholder='Digite algo'
      onChangeText={(event: string) => dispatch(searchValue(event))}
      onSubmitEditing={() => dispatch(searchValue(search))}
      />
    </Container>
  )
}