/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../types/Player';

const initialState: Player[] = [];

const activeBarSlice = createSlice({
  name: 'activePlayers',
  initialState,
  reducers: {
    add: (value, action: PayloadAction<Player>) => {
      value.push(action.payload);
    },
    remove: (value, action: PayloadAction<Player>) => (
      value.filter(item => item.id !== action.payload.id)
    ),
  },
});

export const { actions } = activeBarSlice;
export default activeBarSlice.reducer;
