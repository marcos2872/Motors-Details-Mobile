import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Video from '../components/Video';
import Home from '../screens/Home';
import Motor from '../screens/Motor';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Navigator>
      <Screen
      name= 'home'
      component={Home}
      options={{
        headerShown: false
      }}
      />
      <Screen
      name= 'motor'
      component={Motor}
      options={{
        title: 'Detalhes do motor',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F2CB05',
        },
        headerTitleStyle:{
          fontFamily: 'Roboto_700Bold'
        }

      }}
      />
      <Screen
      name= 'video'
      component={Video}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#79898C',
        },
      }}
      />
    </Navigator>
  )
}