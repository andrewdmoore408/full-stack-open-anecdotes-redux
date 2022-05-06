import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: ({ notification }, action) => notification = action.payload,
    removeNotification: ({ notification }, action) => notification = null
  },
});

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
