import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: ({ filter }, action) => action.payload
  },
});

export const { setFilter, clearFilter } = filterSlice.actions
export default filterSlice.reducer
