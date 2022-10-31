import api from './api';

const getMotors = async () => {
  const motors = await api.get('motors');

  return motors.data;
};

export default getMotors;
