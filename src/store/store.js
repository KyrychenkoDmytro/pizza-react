import { configureStore } from '@reduxjs/toolkit'
import sortingReducer from './reducers/sortingSlice'

export const store = configureStore({
  reducer: {
    sorting: sortingReducer,
  },
})