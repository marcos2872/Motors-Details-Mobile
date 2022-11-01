import { configureStore } from '@reduxjs/toolkit';
import menu from './reducer/heade'

const store = configureStore({
  reducer: {
    menu,
  },
});

export default store;
