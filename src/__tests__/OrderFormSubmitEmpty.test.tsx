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

describe("order form submit when inputs are filled", () => {
  it("submits the form when street and house are filled", async () => {
    const startState: Partial<RootState> = {
      menu: {
        ...menuInitialState,
        cart: [
          {
            item: {
              id: "1",
              name: "Burger",
              price: 9.99,
              image: "",
              description: "",
              category: "Dinner",
            },
            quantity: 2,
          },
        ],
      },
    };

    renderWithStore(startState);

    const streetInput = screen.getByLabelText(/street/i);
    const houseInput = screen.getByLabelText(/house/i);
    const orderButton = screen.getByRole("button", { name: /order/i });

    await userEvent.type(streetInput, "Main Street");
    await userEvent.type(houseInput, "42");

    expect(orderButton).toBeEnabled();
  });
});