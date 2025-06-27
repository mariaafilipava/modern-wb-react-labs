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

const renderWithStore = (preloadedState: Partial<RootState>) => {
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

describe("clear cart", () => {
  it("clears the cart after removing all items", async () => {
    const startState: Partial<RootState> = {
      menu: {
        ...menuInitialState,
        cart: [
          {
            item: {
              id: "1",
              name: "Burger One",
              price: 4.99,
              image: "",
              description: "",
              category: "Dinner",
            },
            quantity: 1,
          },
          {
            item: {
              id: "2",
              name: "Burger Two",
              price: 6.99,
              image: "",
              description: "",
              category: "Dinner",
            },
            quantity: 2,
          },
        ],
      },
    };

    const { store } = renderWithStore(startState);

    while (screen.queryAllByTestId("remove-item").length) {
      await userEvent.click(screen.getAllByTestId("remove-item")[0]);
    }

    const { cart, cartCount } = store.getState().menu;
    expect(cart).toHaveLength(0);
    expect(cartCount).toBe(0);
    expect(screen.queryByTestId("cart-item")).not.toBeInTheDocument();
    expect(
      screen.getByText(/there's nothing in your cart/i)
    ).toBeInTheDocument();
  });
});