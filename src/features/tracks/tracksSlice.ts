import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { request } from '../../app/utils';
import { ITrackItem, ITracksItemsCollection } from './types';
import { tracksItemsCollectionQuery } from './utils';

export const getTracksItems = createAsyncThunk(
  '@@tracksItems/getTracksItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(tracksItemsCollectionQuery);

      const { trackCollection } = data;

      return trackCollection as ITracksItemsCollection;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

interface IInitialState {
  items: ITrackItem[];
  isLoading: boolean;
}

const initialState: IInitialState = {
  items: [],
  isLoading: false,
};

const tracksSlice = createSlice({
  name: '@@tracksItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTracksItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTracksItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(getTracksItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default tracksSlice.reducer;
