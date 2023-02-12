/* eslint-disable import/no-extraneous-dependencies */
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import reduserActivePlayers from '../features/ActivePlayers';

const store = configureStore({
  reducer: {
    ActivePlayers: reduserActivePlayers,
  },
});

composeWithDevTools();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
