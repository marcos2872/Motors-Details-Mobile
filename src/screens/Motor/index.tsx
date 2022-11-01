import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import getMotorsById from '../../utils/getMotorsById'
import { ButonVideo, Container, Details, IconYouTube, ImageM, Images, Scroll, Text, Title } from './styled'
import { useNavigation } from '@react-navigation/native';
import iconYou from '../../assets/youtube.png'

type ParamsProps = {
  id: string
}

type motoType =
  | {
      _id: string;
      model: string;
      tension: number;
      magnets: number;
      poles: number;
      potency: string;
      wire: string;
      turns: number;
      'parallel-wire': number;
      'wire-length': string;
      images: {
        key: string;
        url: string;
      }[];
      video: string;
      description: string;
    }
  | undefined;


const Motor = () => {
  const [motor, setMotor] = useState<motoType>({
    _id: '',
    model: '',
    tension: 0,
    magnets: 0,
    poles: 0,
    potency: '',
    wire: '',
    turns: 0,
    'parallel-wire': 0,
    'wire-length': '',
    images: [{ key: '', url: '' }],
    video: '',
    description: '',
  })

  const route  = useRoute()
  const { navigate } = useNavigation();

  const id = route.params as ParamsProps;
  
  useEffect(() => {
    (async () => {

      const motor = await getMotorsById(id.id);
      setMotor(motor)
    })()
  }, [])
  
  return (
   <Container>
    <Scroll showsVerticalScrollIndicator={false}>
    <Title>{motor.model}</Title>
    <Details>
      <Text>Tensão: {motor?.tension}</Text>
      <Text>Imãs: {motor?.magnets}</Text>
      <Text>Polos: {motor?.poles}</Text>
      <Text>Potência: {motor?.potency}</Text>
      <Text>Fio: {motor?.wire}</Text>
      <Text>Fios paralelos: {motor?.['parallel-wire']}</Text>
      <Text>Comprimento: {motor?.['wire-length']}</Text>
      <Text>Voltas: {motor?.turns}</Text>
      <Text>Descrição: {motor?.description}</Text>
      <ButonVideo
      onPress={() => navigate('video', {url: motor.video})}
      ><IconYouTube source={iconYou} /></ButonVideo>
    </Details>
    <Images>
      {motor?.images.map(({url}) => {
        return (
        <ImageM
        key={Math.random()} source={{
          uri: url ? url : null,
        }}
        alt='foto do motor'
        />
      )})}
    </Images>
    </Scroll>
   </Container>
  )
}

export default Motor;
