import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  EmptyState,
  EmptyText,
  MenuButton,
  OrderCard,
  Image,
  Details,
  ItemName,
  Controls,
  Price,
  QuantityInput,
  RemoveButton,
  OrderForm,
  AddressFieldRow,
  AddressLabel,
  AddressInput,
  OrderButton,
  TotalRow,
  TotalLabel,
  TotalAmount,
} from "./OrderPage.styled";
import burgerImage from "../../assets/order_photo.png";
import { updateQuantity, removeFromCart } from "../../store/menuSlice";

const OrderPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.menu.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const isCartEmpty = cartItems.length === 0;
  const isFormValid = street.trim() !== "" && house.trim() !== "";

  const total = cartItems.reduce(
    (sum, { item, quantity }) => sum + item.price * quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Order placed", { street, house, cartItems });
  };

  if (isCartEmpty) {
    return (
      <Wrapper>
        <Title>Your Cart</Title>
        <EmptyState>
          <EmptyText>
            There's nothing in your cart&nbsp;yet.
            <br />
            Let’s pick something tasty!
          </EmptyText>
          <MenuButton onClick={() => navigate("/menu")}>
            Place an Order
          </MenuButton>
        </EmptyState>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>Finish your order</Title>

      {cartItems.map(({ item, quantity }) => (
        <OrderCard data-testid="cart-item" key={item.id}>
          <Image src={item.image || burgerImage} alt={item.name} />
          <Details>
            <ItemName>{item.name}</ItemName>
          </Details>
          <Controls>
            <Price>${item.price.toFixed(2)}&nbsp;USD</Price>
            <QuantityInput
              data-testid="qty-input"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Number(e.target.value),
                  })
                )
              }
            />
            <RemoveButton
              data-testid="remove-item"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              ×
            </RemoveButton>
          </Controls>
        </OrderCard>
      ))}

      <TotalRow>
        <TotalLabel>Order total</TotalLabel>
        <TotalAmount data-testid="cart-total">
          {total.toFixed(2)} USD
        </TotalAmount>
      </TotalRow>

      <OrderForm onSubmit={handleSubmit}>
        <AddressFieldRow>
          <AddressLabel htmlFor="street">Street</AddressLabel>
          <AddressInput
            id="street"
            placeholder="Enter your street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </AddressFieldRow>
        <AddressFieldRow>
          <AddressLabel htmlFor="house">House</AddressLabel>
          <AddressInput
            id="house"
            placeholder="Enter your house number"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </AddressFieldRow>
        <OrderButton type="submit" disabled={!isFormValid}>
          Order
        </OrderButton>
      </OrderForm>
    </Wrapper>
  );
};

export default OrderPage;