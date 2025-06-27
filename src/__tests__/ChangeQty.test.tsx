import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import menuReducer, { menuInitialState } from "../store/menuSlice";
import OrderPage from "../pages/OrderPage/OrderPage";

const rootReducer = combineReducers({ menu: menuReducer });
type RootState = ReturnType<typeof rootReducer>;

const renderWithStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState as RootState,
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/order"]}>
          <OrderPage />
        </MemoryRouter>
      </Provider>
    ),
  };
};

describe("cart quantity change", () => {
  it("increases and decreases quantity correctly", async () => {
    const startState: Partial<RootState> = {
      menu: {
        ...menuInitialState,
        cart: [
          {
            item: {
              id: "1",
              name: "Test Burger",
              price: 5.99,
              image: "",
              description: "",
              category: "Dinner",
            },
            quantity: 1,
          },
        ],
      },
    };

    const { store } = renderWithStore(startState);

    const input = screen.getByTestId("qty-input") as HTMLInputElement;

    await userEvent.clear(input);
    await userEvent.type(input, "3");
    expect(input.value).toBe("3");
    let state = store.getState().menu;
    expect(state.cart[0].quantity).toBe(3);
    expect(state.cartCount).toBe(3);

    await userEvent.clear(input);
    await userEvent.type(input, "1");
    expect(input.value).toBe("1");
    state = store.getState().menu;
    expect(state.cart[0].quantity).toBe(1);
    expect(state.cartCount).toBe(1);
  });
});