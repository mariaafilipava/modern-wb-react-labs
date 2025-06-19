import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.menu.cart));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;