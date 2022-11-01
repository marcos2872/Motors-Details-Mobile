import { View, Text } from 'react-native'
import React from 'react'
import { ImageOk } from './styled'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Image = ({url}: {url: string}) => {
const [image, setImage] = useState('')

const dowloadImage = async () => {
  const response = await fetch(url);
  console.log(response);
  const imageBlob = await response.blob();
  
  // setImage(URL.createObjectURL(imageBlob))
}
useEffect(() => {
dowloadImage()
}, [])

  return (
      <ImageOk source={{uri: url}} alt='foto do motor' />
  )
}

export default Image