import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Meal = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

interface CartItem {
  item: Meal;
  quantity: number;
}

interface MenuState {
  items: Meal[];
  orders: any[];
  visibleCount: number;
  selectedCategory: string;
  cartCount: number;
  cart: CartItem[];
}

const storedCart = localStorage.getItem("cart");
const parsedCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

const initialState: MenuState = {
  items: [],
  orders: [],
  visibleCount: 6,
  selectedCategory: "All",
  cart: parsedCart,
  cartCount: parsedCart.reduce((sum, i) => sum + i.quantity, 0),
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Meal[]>) {
      state.items = action.payload;
    },
    setOrders(state, action: PayloadAction<any[]>) {
      state.orders = action.payload;
    },
    incrementVisibleCount(state) {
      state.visibleCount += 6;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
      state.visibleCount = 6;
    },
    addToCart(state, action: PayloadAction<number>) {
      state.cartCount += action.payload;
    },
    addToCartItem(state, action: PayloadAction<Meal>) {
      const existingItem = state.cart.find((i) => i.item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ item: action.payload, quantity: 1 });
      }
      state.cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
    },
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.cart = action.payload;
      state.cartCount = action.payload.reduce((sum, i) => sum + i.quantity, 0);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const item = state.cart.find((i) => i.item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
        state.cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
      }
    },
  },
});

export const {
  setItems,
  setOrders,
  incrementVisibleCount,
  setSelectedCategory,
  addToCart,
  addToCartItem,
  setCart,
  updateQuantity,
} = menuSlice.actions;

export default menuSlice.reducer;