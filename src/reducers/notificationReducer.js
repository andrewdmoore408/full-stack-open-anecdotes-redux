import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: ({ notification }, action) => {
      return action.payload
    },
    removeNotification: ({ notification }, action) => { return '' }
  },
});

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
