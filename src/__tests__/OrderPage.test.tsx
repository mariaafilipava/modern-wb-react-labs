import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../store/menuSlice";
import OrderPage from "../pages/OrderPage/OrderPage";

const renderWithStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: { menu: menuReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>
        <OrderPage />
      </MemoryRouter>
    </Provider>
  );
};

describe("OrderPage", () => {
  it("renders cart item if cart is not empty", () => {
    renderWithStore({
      menu: {
        cart: [
          {
            item: {
              id: "1",
              name: "Cheeseburger",
              price: 5.99,
              image: "",
              description: "",
              category: "Dinner",
            },
            quantity: 2,
          },
        ],
      },
    });

    expect(screen.getByTestId("cart-item")).toBeInTheDocument();
  });
});