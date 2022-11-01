import React from 'react'
import { ImageOk } from './styled'

const Image = ({url}: {url: string}) => {
  return (
      <ImageOk 
      source={{uri: url}}
      alt='foto do motor'
      loadingIndicatorSource={() => console.log('teste')}
      />
  )
}

export default Image