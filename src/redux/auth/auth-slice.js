import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  login,
  current,
  updateUser,
  updateUserAvatar,
  logout,
  fetchAddToFavorite,
  fetchDeleteFromFavorite,
  refreshUser,
} from './auth-operations';
import initialState from './auth-initialState';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        handlePending(state);
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, state => {
        handlePending(state);
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(current.pending, state => {
        handlePending(state);
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isRefreshing = false;
        state.isLoading = false;
        state.user = user;
        state.isLogin = true;
      })
      .addCase(current.rejected, state => {
        // handleRejected();
        state.isRefreshing = false;
        state.isLoading = false;
        state.isLogin = false;
        state.token = '';
        state.user = {};
      })
      .addCase(updateUser.pending, state => {
        handlePending(state);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        state.user = user;
        state.isLogin = true;
      })
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUserAvatar.pending, state => {
        handlePending(state);
      })
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        state.user = user;
        state.isLogin = true;
      })
      .addCase(updateUserAvatar.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(fetchAddToFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddToFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.favorite.push(action.payload.id);
        state.error = null;
      })
      .addCase(fetchAddToFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload.message;
      })
      .addCase(fetchDeleteFromFavorite.pending, state => {
        state.loading = true;
      })
      .addCase(fetchDeleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (Array.isArray(state.user.favorite)) {
          state.user.favorite = state.user.favorite.filter(
            id => id !== payload.id
          );
        }
      })
      .addCase(fetchDeleteFromFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
