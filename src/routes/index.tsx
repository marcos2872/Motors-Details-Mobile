import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from './stack.routers'

export function Routes(){
  return(
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  )
}