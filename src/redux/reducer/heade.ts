import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'menu',
  initialState: {
    isMenu: false,
    search: ''
  },

  reducers: {
    toogleMenu(state, { payload }) {
      return {
        ...state,
        isMenu: payload,
      };
    },
    searchValue(state, { payload }) {
      return {
        ...state,
        search: payload,
      }
    }
  },
});

export const { toogleMenu, searchValue } = slice.actions;

export default slice.reducer;
