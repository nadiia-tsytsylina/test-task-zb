import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  authRegister,
  authLogin,
  authLogout,
  fetchCurrentUser,
  resetPassword,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isFetchingUser: false,
    isRegistred: false,
    isPasswordReseted: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authRegister.pending, handlePending)
      .addCase(authRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isRegistred = true;
      })
      .addCase(authRegister.rejected, handleRejected)
      .addCase(authLogin.pending, handlePending)
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.isRegistred = false;
      })
      .addCase(authLogin.rejected, handleRejected)
      .addCase(authLogout.pending, handlePending)
      .addCase(authLogout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
        state.isRegistred = false;
      })
      .addCase(authLogout.rejected, handleRejected)
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isLoading = true;
        state.isFetchingUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.isFetchingUser = false;
        state.isRegistred = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isFetchingUser = false;
      })
      .addCase(resetPassword.pending, handlePending)
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isPasswordReseted = true;
        state.isLoading = false;
        state.error = null;
        state.isRegistred = false;
      })
      .addCase(resetPassword.rejected, handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
