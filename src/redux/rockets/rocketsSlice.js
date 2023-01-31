import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    dummy: (state) => state.push('dummyText'),
  },
});

const { dummy } = rocketsSlice.actions;
const { reducer } = rocketsSlice;

export {
  rocketsSlice,
  reducer as default,
  dummy,
};
