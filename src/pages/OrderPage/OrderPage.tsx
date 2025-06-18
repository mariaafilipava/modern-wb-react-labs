import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  Wrapper,
  Title,
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
} from "./OrderPage.styled";
import burgerImage from "../../assets/order_photo.png";
import { updateQuantity } from "../../store/menuSlice";

const OrderPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.menu.cart);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Title>Finish your order</Title>

      {cartItems.map(({ item, quantity }) => (
        <OrderCard key={item.id}>
          <Image src={item.image || burgerImage} alt={item.name} />
          <Details>
            <ItemName>{item.name}</ItemName>
          </Details>
          <Controls>
            <Price>${item.price.toFixed(2)} USD</Price>
            <QuantityInput
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
            />
            <RemoveButton>X</RemoveButton>
          </Controls>
        </OrderCard>
      ))}

      <OrderForm>
        <AddressFieldRow>
          <AddressLabel htmlFor="street">Street</AddressLabel>
          <AddressInput id="street" type="text" placeholder="Enter your street" />
        </AddressFieldRow>

        <AddressFieldRow>
          <AddressLabel htmlFor="house">House</AddressLabel>
          <AddressInput id="house" type="text" placeholder="Enter your house number" />
        </AddressFieldRow>
      </OrderForm>

      <OrderButton>Order</OrderButton>
    </Wrapper>
  );
};

export default OrderPage;