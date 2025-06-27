import { useState, ChangeEvent } from "react";
import {
  MenuCard,
  MenuImage,
  MenuContent,
  MenuHeader,
  MenuTitle,
  MenuPrice,
  MenuDescription,
  MenuActions,
  QuantityInput,
  AddToCartButton,
} from "./MenuItem.styled";

type Meal = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

type MenuItemProps = {
  item: Meal;
  onAddToCart: (item: Meal, quantity: number) => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(item, quantity);
    }
  };

  return (
    <MenuCard>
      <MenuImage
        src={item.image || "https://via.placeholder.com/120"}
        alt={item.name || "Meal image"}
      />
      <MenuContent>
        <MenuHeader>
          <MenuTitle>{item.name || "No name"}</MenuTitle>
          <MenuPrice>
            ${item.price ? item.price.toFixed(2) : "N/A"}
          </MenuPrice>
        </MenuHeader>
        <MenuDescription>
          {item.description && item.description.length > 90
            ? item.description.slice(0, 90) + "..."
            : item.description || "No description available."}
        </MenuDescription>
        <MenuActions>
          <QuantityInput
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <AddToCartButton onClick={handleAddToCart}>
            Add to cart
          </AddToCartButton>
        </MenuActions>
      </MenuContent>
    </MenuCard>
  );
};

export default MenuItem;