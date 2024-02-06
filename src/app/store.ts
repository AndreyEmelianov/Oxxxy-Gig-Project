import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import tourReducer from '../features/tours/toursSlice';
import tracksReducer from '../features/tracks/tracksSlice';

export const store = configureStore({
  reducer: {
    tour: tourReducer,
    tracks: tracksReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
