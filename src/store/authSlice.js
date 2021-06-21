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
      const { code } = action.payload
      if (code === 403) state.error = 403
      if (code === 200) {
        state.isAuth = true
        state.error = false
      }
      state.isLoading = false
    },
    [login.pending]: (state, action) => {
      state.isLoading = true
    },
  },
})

export default authSlice.reducer
