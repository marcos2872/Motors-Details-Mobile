import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home';
// import Motor from '../screens/Motor';
import { StackRouter } from './stack.routes';

const {Screen, Navigator} = createDrawerNavigator();

export function DrawerRouter() {
  return (
    <Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Screen
      name= 'home'
      component={Home}
      options={{
        drawerLabel: 'Home'
      }}
      />
       <Screen
      name= 'motor'
      component={StackRouter}
      />
    </Navigator>
  )
}