import { createSlice } from '@reduxjs/toolkit'

let timeoutId = null;
const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      return action.payload
    },
    removeNotification: ({ notification }, action) => {
      return ''
    }
  },
});

export const setNotification = (text, numSeconds) => {
  return async dispatch => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => dispatch(removeNotification()), numSeconds * 1000)

    dispatch(addNotification(text))
  }
}

export const { addNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
