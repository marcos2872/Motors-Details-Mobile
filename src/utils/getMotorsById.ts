import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage';

const {getItem} = useAsyncStorage('@emotors:motors');

const getMotorsById = async (id: string) => {
  const motors = await getItem()

  const filter = JSON.parse(motors).find(({ _id }: { _id: string }) => _id === id);

  return filter;
};

export default getMotorsById;
