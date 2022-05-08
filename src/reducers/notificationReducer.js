import { createSlice } from '@reduxjs/toolkit'
import store from '../store'

const initialState = { text: '', timeoutId: null }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      console.log('in addNotification, state.notification points to ', state.notification)
      // if (notification.timeoutId) {
      //   clearTimeout(notification.timeoutId)
      // }

      return action.payload
    },
    removeNotification: ({ notification }, action) => {
      console.log('in removeNotification: notification points to ', notification)
      return {
        text: '',
        timeoutId: null
      }
    }
  },
});

export const setNotification = (text, numSeconds) => {
  return async dispatch => {
    if (store.notification.timeoutId) {
      clearTimeout(store.notification.timeoutId)
    }

    const timeoutId = setTimeout(() => dispatch(removeNotification()), numSeconds * 1000)

    dispatch(addNotification({ text, timeoutId }))
  }
}

export const { addNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
