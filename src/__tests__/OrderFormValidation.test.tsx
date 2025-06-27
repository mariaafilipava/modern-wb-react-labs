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

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/order"]}>
        <OrderPage />
      </MemoryRouter>
    </Provider>
  );
};

describe("order form", () => {
  it("enables submit only when inputs are filled", async () => {
    renderWithStore({
      menu: {
        ...menuInitialState,
        cart: [
          {
            item: {
              id: "1",
              name: "Burger",
              price: 5,
              image: "",
              description: "",
              category: "Dinner",
            },
            quantity: 1,
          },
        ],
      },
    });

    const submit = screen.getByRole("button", { name: /^order$/i });
    expect(submit).toBeDisabled();

    await userEvent.type(screen.getByLabelText(/street/i), "Baker");
    await userEvent.type(screen.getByLabelText(/house/i), "221B");

    expect(submit).toBeEnabled();
  });
});