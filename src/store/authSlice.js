import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../api/auth'

export const login = createAsyncThunk('users/login', API.login)

const authSlice = createSlice({
  name: 'columns',
  initialState: {
    data: {
      email: '',
      password: '',
    },
    isAuth: true,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { code, data } = action.payload
      if (code === 403) state.error = true
      if (code === 200) {
        state.data = data
        state.isAuth = true
        state.error = false
      }
    },
  },
})

export default authSlice.reducer
