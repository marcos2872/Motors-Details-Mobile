import { NavigationContainer } from '@react-navigation/native'
import { DrawerRouter } from './drawer.routes'
import { StackRouter } from './stack.routes'

export function Routes(){
  return(
    <NavigationContainer>
      <StackRouter />
      {/* <DrawerRouter /> */}
    </NavigationContainer>
  )
}