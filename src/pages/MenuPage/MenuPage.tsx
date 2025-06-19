import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setItems,
  setOrders,
  incrementVisibleCount,
  setSelectedCategory,
  addToCartItem,
} from "../../store/menuSlice";

import MenuItem from "../../components/MenuItem/MenuItem";
import {
  PageWrapper,
  HeaderWrapper,
  HeaderInner,
  Title,
  Description,
  TooltipWrapper,
  TooltipText,
  FilterButtons,
  FilterButton,
  Grid,
  SeeMoreWrapper,
  SeeMoreButton,
} from "./MenuPage.styled";

function MenuPage(): React.ReactElement {
  const dispatch = useDispatch();
  const { items, visibleCount, selectedCategory } = useSelector(
    (state: RootState) => state.menu
  );

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        const formattedMeals = data.map((meal: any) => ({
          id: meal.id,
          name: meal.meal,
          image: meal.img,
          description: meal.instructions,
          category: meal.category,
          price: meal.price,
        }));
        dispatch(setItems(formattedMeals));
      });

    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders")
      .then((res) => res.json())
      .then((data) => dispatch(setOrders(data)));
  }, [dispatch]);

  const handleSeeMore = () => {
    dispatch(incrementVisibleCount());
  };

  const handleFilter = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const handleAddToCart = (item: any, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCartItem(item));
    }
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <PageWrapper>
      <HeaderWrapper>
        <HeaderInner>
          <Title>Browse our menu</Title>
          <Description>
            Use our menu to place an order online, or{" "}
            <TooltipWrapper>
              phone
              <TooltipText>+1 (234) 567-890</TooltipText>
            </TooltipWrapper>{" "}
            our store to place a pickup order. Fast and fresh food.
          </Description>
        </HeaderInner>
      </HeaderWrapper>

      <FilterButtons>
        {["All", "Dessert", "Dinner", "Breakfast"].map((category) => (
          <FilterButton
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleFilter(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterButtons>

      <Grid>
        {filteredItems.slice(0, visibleCount).map((item) => (
          <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </Grid>

      {visibleCount < filteredItems.length && (
        <SeeMoreWrapper>
          <SeeMoreButton onClick={handleSeeMore}>See more</SeeMoreButton>
        </SeeMoreWrapper>
      )}
    </PageWrapper>
  );
}

export default MenuPage;
