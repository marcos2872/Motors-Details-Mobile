import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import getMotorsById from '../../utils/getMotorsById'
import { Container } from './styled'

type ParamsProps = {
  id: string
}

const Motor = () => {
  const [motor, setMotor] = useState()
  const route  = useRoute()

  const id = route.params as ParamsProps;
  
  useEffect(() => {
    (async () => {
      const motor = await getMotorsById(id.id);
      setMotor(motor)
      
    })()
  }, [])
  
  return (
   <Container>
    
   </Container>
  )
}

export default Motor