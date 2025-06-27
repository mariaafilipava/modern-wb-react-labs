import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("OrderPage flow", () => {
  it("shows empty-cart state", () => {
    setUp({ menu: { cart: [] } });
    expect(
      screen.getByText(/there's nothing in your cart/i)
    ).toBeInTheDocument();
  });

  it("enables submit when form is filled", async () => {
    setUp({
      menu: {
        cart: [
          {
            item: { id: "1", name: "Burger", price: 5, image: "", description: "", category: "Dinner" },
            quantity: 1,
          },
        ],
      },
    });

    const button = screen.getByRole("button", { name: /^order$/i });
    expect(button).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/street/i), "Baker");
    await userEvent.type(screen.getByLabelText(/house/i), "221B");

    expect(button).toBeEnabled();
  });
});