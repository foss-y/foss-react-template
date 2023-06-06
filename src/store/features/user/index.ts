import { getUserInfoApi } from '@/api/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (payload, { dispatch }) => {
    getUserInfoApi().then((res) => {
      dispatch(setUserInfo(res.data))
    })
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null
  },
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    },
    clearUserInfo(state) {
      console.log('clearUserInfo')
      state.userInfo = null
    }
  }
})

export const { setUserInfo, clearUserInfo } = userSlice.actions

export default userSlice.reducer
