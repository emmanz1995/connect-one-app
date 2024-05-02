import {createSlice} from '@reduxjs/toolkit';
import {Dispatch} from 'redux';
import { authService } from '../../api/authService';

export const onLogin = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    console.log('...email', email)
    console.log('...password', password)
    const response = await authService.onSignIn(email, password)
    dispatch(setToken(null, response))
  } catch(err) {
    console.log(err)
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setToken: (state: unknown, action) => {
      console.log('...state', state)
      console.log('...action', action)
      console.log('...action.payload', action.payload)
      state.user = action.payload
    }
  }
})

export const { setToken } = authSlice.actions;
export default authSlice.reducer