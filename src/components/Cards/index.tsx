import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import getMotors from '../../utils/getAllMotors';
import { Card, Scroll, Container, Name, Image } from './styled';
import mokMotors from '../../utils/mokApi'

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

const styled = () => {
  const [cards, setCards] = useState<motoType>([])

  useEffect(() => {
    (async () => {
      // const motors = await getMotors()
      setCards(mokMotors)
    })()
  }, [])
  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        {cards.map((motor) => (
          <Card key={Math.random()}>
            <Image source={{
          uri: motor.images[0].url,
        }}/>
            <Name>{motor.model}</Name>
          </Card>
        ))}

      </Scroll>
    </Container>

  )
}

export default styled