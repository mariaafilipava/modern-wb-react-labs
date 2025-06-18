import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Meal = {
  id: string
  name: string
  image: string
  description: string
  category: string
  price: number
}

interface MenuState {
  items: Meal[]
  orders: any[]
  visibleCount: number
  selectedCategory: string
  cartCount: number
}

const initialState: MenuState = {
  items: [],
  orders: [],
  visibleCount: 6,
  selectedCategory: 'All',
  cartCount: 0,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Meal[]>) {
      state.items = action.payload
    },
    setOrders(state, action: PayloadAction<any[]>) {
      state.orders = action.payload
    },
    incrementVisibleCount(state) {
      state.visibleCount += 6
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload
      state.visibleCount = 6
    },
    addToCart(state, action: PayloadAction<number>) {
      state.cartCount += action.payload
    },
  },
})

export const {
  setItems,
  setOrders,
  incrementVisibleCount,
  setSelectedCategory,
  addToCart,
} = menuSlice.actions

export default menuSlice.reducer