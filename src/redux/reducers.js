// src/redux/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const reducers = createSlice({
  name: 'weather',
  initialState: {
    weather: null,
  },
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeather } =reducers.actions;
export default reducers.reducer;
