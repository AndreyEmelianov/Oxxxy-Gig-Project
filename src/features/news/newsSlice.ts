import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { request } from '../../app/utils';
import { newsItemsCollectionQuery } from './utils';
import { INewsItem, INewsItemsCollection } from './types';

export const getNewsItems = createAsyncThunk('@@newsItems/getNewsItems', async (_, thunkAPI) => {
  try {
    const data = await request(newsItemsCollectionQuery);
    const { newsItemCollection } = data;

    return newsItemCollection as INewsItemsCollection;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

interface IInitialState {
  items: INewsItem[];
  isLoading: boolean;
}

const initialState: IInitialState = {
  items: [],
  isLoading: false,
};

const newsItemsSlice = createSlice({
  name: '@@newsItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      })
      .addCase(getNewsItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default newsItemsSlice.reducer;
