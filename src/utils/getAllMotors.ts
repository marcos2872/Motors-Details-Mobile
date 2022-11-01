import api from './api';
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';

const {setItem, getItem} = useAsyncStorage('@emotors:motors');

const getMotors = async () => {
  try {
    const motors = await api.get('motors');
    const local = await getItem();
    const isEqual = local === JSON.stringify(motors)

    if (isEqual) {
      return JSON.parse(local)
    }
    await setItem(JSON.stringify(motors))
    return JSON.parse(local);
  } catch (error) {
    return JSON.parse(await getItem());
  }

};

export default getMotors;
