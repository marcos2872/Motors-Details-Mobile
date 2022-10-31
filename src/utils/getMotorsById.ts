import api from './api';

const getMotorsById = async (id: string) => {
  const motors = await api.get('motors');

  const filter = motors.data.find(({ _id }: { _id: string }) => _id === id);

  return filter;
};

export default getMotorsById;
