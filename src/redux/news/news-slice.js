import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNews, fetchNewsByQuery2 } from './news-operation';
import { setNews } from './news-actions';

const initialState = {
  items: [],
  hints: 0,
  totalHints: 0,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setNews, state => {
        state.items = [];
      })
      .addMatcher(
        isAnyOf(fetchNews.pending, fetchNewsByQuery2.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchNews.fulfilled, fetchNewsByQuery2.fulfilled),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
          state.items = payload.result;
          state.hints = payload.hints;
          state.totalHints = payload.totalHints;
        }
      )
      .addMatcher(
        isAnyOf(fetchNews.rejected, fetchNewsByQuery2.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const newsReducer = newsSlice.reducer;
