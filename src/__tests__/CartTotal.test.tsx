import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import menuReducer from "../store/menuSlice";
import OrderPage from "../pages/OrderPage/OrderPage";

const setUp = (preloadedState: unknown) =>
  render(
    <Provider
      store={configureStore({
        reducer: { menu: menuReducer },
        preloadedState,
      })}
    >
      <MemoryRouter initialEntries={["/order"]}>
        <OrderPage />
      </MemoryRouter>
    </Provider>
  );

describe("order total calculation", () => {
  it("shows correct total", () => {
    setUp({
      menu: {
        cart: [
          { item: { id: "1", name: "Burger", price: 4.5, image: "", description: "", category: "Dinner" }, quantity: 2 },
          { item: { id: "2", name: "Fries",  price: 3.2, image: "", description: "", category: "Dinner" }, quantity: 1 },
        ],
      },
    });

    expect(screen.getByTestId("cart-total").textContent).toBe("12.20 USD");
  });
});