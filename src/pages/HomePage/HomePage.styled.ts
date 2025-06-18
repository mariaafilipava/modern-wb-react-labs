import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
`;

export const Content = styled.div`
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 60px;
  line-height: 60px;
  font-weight: 400;
  color: #08090a;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1.8px;
  margin: 0;

  span {
    color: #35b8be;
  }
`;

export const Subtitle = styled.p`
  margin: 27px 0 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 24.12px;
  letter-spacing: 0.36px;
  color: #546285;
  font-family: 'Inter', sans-serif;
`;

export const OrderButton = styled.button`
  background-color: #35b8be;
  color: #ffffff;
  font-size: 17px;
  line-height: 20px;
  padding: 16px 32px;
  margin-top: 53px;
  border: none;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  text-align: center;
  cursor: not-allowed;
`;

export const Rating = styled.div`
  margin-top: 30px;
  font-family: 'Inter', sans-serif;

  .trustpilot-block {
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }

  .trustpilot-header {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    color: #08090a;
  }

  .trustpilot-score {
    margin-top: 10px;
    font-weight: 400;
    color: #08090a;
  }

  .trustpilot-score span {
    color: #35b8be;
    font-weight: 400;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ImageSection = styled.div`
  width: 600px;
  height: 580px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;