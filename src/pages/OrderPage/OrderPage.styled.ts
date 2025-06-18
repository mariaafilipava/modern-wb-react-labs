import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 60px 0;
  background: #f3fcfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  letter-spacing: 1.65px;
  text-align: center;
  color: #35b8be;
  margin-bottom: 40px;
`;

export const OrderCard = styled.div`
  width: 1180px;
  height: 200px;
  background: #ffffff;
  border: 1px solid #35b8be26;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 30px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;

export const ItemName = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: #08090a;
  margin-bottom: 12px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Price = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  color: #35b8be;
  margin-right: 60px;
`;

export const QuantityInput = styled.input`
  width: 60px;
  height: 45px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  background: #fafafa;
  text-align: center;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.36px;
`;

export const RemoveButton = styled.button`
  width: 60px;
  height: 45px;
  background: #35b8be;
  border-radius: 6px;
  color: #ffffff;
  font-size: 24px;
  line-height: 27px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #2da5ab;
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const AddressFieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const AddressLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #08090a;
  white-space: nowrap;
  width: 80px;
`;

export const AddressInput = styled.input`
  width: 430px;
  height: 45px;
  background: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
`;

export const OrderButton = styled.button`
  width: 147px;
  height: 52px;
  background: #35b8be;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  margin: 35px auto 0;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #2da5ab;
  }

  &:active {
    transform: scale(0.97);
  }
`;