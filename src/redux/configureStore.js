import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
