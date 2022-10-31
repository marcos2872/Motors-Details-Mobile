import React from 'react'
import { Text } from 'react-native'
import { Card, Scroll, Container } from './styled'

const styled = () => {
  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Card>

        </Card>

        <Card><Text>tttttttt</Text></Card>

        <Card><Text>tttttttt</Text></Card>

        <Card><Text>tttttttt</Text></Card>
      </Scroll>
    </Container>

  )
}

export default styled