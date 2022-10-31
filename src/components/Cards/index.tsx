import React, { useEffect, useState } from 'react'
import getMotors from '../../utils/getAllMotors';
import { Scroll, Container, Name, Image, Buton } from './styled';
import { useNavigation } from '@react-navigation/native';

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
    }[]
  | undefined;

const Cards = () => {
  const [cards, setCards] = useState<motoType>([])
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const motors = await getMotors();
      setCards(motors)
    })()
  }, [])

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        {cards.map((motor) => (
          <Buton key={Math.random()} onPress={() => {
            navigate('motor', { id: motor._id} )}}> 
              <Image source={{
          uri: motor.images[0].url,
        }}
        />            
        <Name>{motor.model}</Name>
          </Buton>
        ))}
      </Scroll>
    </Container>

  )
}

export default Cards