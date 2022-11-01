import 'react-native-gesture-handler';

// import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/'
import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  });
  if (!fontsLoaded) {
    return null ;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <Routes />
      </Provider>
    </ThemeProvider>
  );
}
