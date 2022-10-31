import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Motor from '../screens/Motor';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Screen
      name= 'home'
      component={Home}
      />
      <Screen
      name= 'motor'
      component={Motor}
      />
    </Navigator>
  )
}