import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Page = 'login' | 'home' | 'menu'

interface PageState {
  activePage: Page
}

const initialState: PageState = {
  activePage: 'login',
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<Page>) => {
      state.activePage = action.payload
    },
  },
})

export const { setActivePage } = pageSlice.actions
export default pageSlice.reducer