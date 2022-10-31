import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from './stack.routes'

export function Routes(){
  return(
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  )
}