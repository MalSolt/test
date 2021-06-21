import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../api/auth'

export const login = createAsyncThunk('users/login', API.login)

const authSlice = createSlice({
  name: 'columns',
  initialState: {
    isAuth: false,
    error: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isAuth = true
      state.error = false
      state.isLoading = false
    },
    [login.pending]: (state, action) => {
      state.isLoading = true
    },
    [login.rejected]: (state, action) => {
      state.error = true
      state.isLoading = false
    },
  },
})

export default authSlice.reducer
