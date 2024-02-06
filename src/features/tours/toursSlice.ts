import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { request } from '../../app/utils';
import { toursItemsCollectionQuery } from './utils';
import { ITourItem, IToursItemsCollection } from './types';

export const getToursItems = createAsyncThunk('@@toursItems/getToursItems', async (_, thunkAPI) => {
  try {
    const data = await request(toursItemsCollectionQuery);
    const { tourItemCollection } = data;

    return tourItemCollection as IToursItemsCollection;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

interface IInitialState {
  items: ITourItem[];
  isLoading: boolean;
}

const initialState: IInitialState = {
  items: [],
  isLoading: false,
};

const toursItemsSlice = createSlice({
  name: '@@toursItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToursItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToursItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(getToursItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default toursItemsSlice.reducer;
