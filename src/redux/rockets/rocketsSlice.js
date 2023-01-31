import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../../modules/RocketsApi';

const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    getRocketsSuccess: (state, action) => action.payload,
  },
});

const { getRocketsSuccess } = rocketsSlice.actions;

// Thunks
const gettingRockets = () => async (dispatch) => {
  const rockets = await getRockets();
  dispatch(getRocketsSuccess(rockets));
};

const { reducer } = rocketsSlice;

export {
  reducer as default,
  rocketsSlice,
  getRocketsSuccess,
  gettingRockets,
};
