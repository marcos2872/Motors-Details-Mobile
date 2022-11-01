import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
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
  const {search} = useSelector(( {menu} ) => menu)

const getApi = async () => {
  const motors = await getMotors();
  setCards(motors)

}

  useEffect(() => {
    getApi()
  }, []);

useEffect(() => {
  if (search === '') {
    getApi()
  }
const cardsFilter = cards.filter(({model}) => model.includes(search))
setCards(cardsFilter)
}, [search])

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        {cards.map((motor) => (
          <Buton key={Math.random()} onPress={() => {
            navigate('motor', { id: motor._id} )}}> 
              <Image source={{
          uri: motor.images[0].url,
        }}
        alt='foto do motor'
        />            
        <Name>{motor.model}</Name>
          </Buton>
        ))}
      </Scroll>
    </Container>

  )
}

export default Cards