import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useFetchLogger from "../../hooks/useFetch";
import {
  Wrapper,
  Container,
  Content,
  Title,
  Subtitle,
  OrderButton,
  Rating,
  ImageSection,
} from "./HomePage.styled";
import homepageBanner from "../../assets/homepage-banner.png";
import trustpilotLogo from "../../assets/trustpilot-star.png";

type Props = {
  onNavigate: () => void;
};

const HomePage: React.FC<Props> = ({ onNavigate }) => {
  useFetchLogger("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");

  return (
    <Wrapper>
      <Header cartCount={0} />
      <Container>
        <Content>
          <Title>
            Beautiful food & takeaway, <span>delivered</span> to your door.
          </Title>
          <Subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </Subtitle>
          <OrderButton disabled onClick={onNavigate}>
            Place an Order
          </OrderButton>

          <Rating>
            <div className="trustpilot-block">
              <div className="trustpilot-header">
                <img
                  src={trustpilotLogo}
                  alt="Trustpilot logo"
                  width="20"
                  height="20"
                />
                <span>Trustpilot</span>
              </div>
              <p className="trustpilot-score">
                <span>4.8 out of 5</span> based on 2000+ reviews
              </p>
            </div>
          </Rating>
        </Content>

        <ImageSection>
          <img src={homepageBanner} alt="Burger with fries and app icons" />
        </ImageSection>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
