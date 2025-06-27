import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import menuReducer, { addToCartItem } from "../store/menuSlice";
import MenuItem from "../components/MenuItem/MenuItem";

const createStore = () =>
  configureStore({
    reducer: { menu: menuReducer },
  });

describe("adding item to cart", () => {
  it("adds 1 item after clicking Add to cart", async () => {
    const store = createStore();

    const product = {
      id: "42",
      name: "Test Burger",
      image: "",
      description: "",
      category: "Dinner",
      price: 9.99,
    };

    const onAddToCart = (_item: typeof product, qty: number) => {
      for (let i = 0; i < qty; i++) store.dispatch(addToCartItem(_item));
    };

    render(
      <Provider store={store}>
        <MenuItem item={product} onAddToCart={onAddToCart} />
      </Provider>
    );

    await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    const { cart, cartCount } = store.getState().menu;
    expect(cart).toHaveLength(1);
    expect(cart[0].item.id).toBe(product.id);
    expect(cart[0].quantity).toBe(1);
    expect(cartCount).toBe(1);
  });
});
