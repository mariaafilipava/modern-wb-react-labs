import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './pageSlice'
import menuReducer from './menuSlice'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    menu: menuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch