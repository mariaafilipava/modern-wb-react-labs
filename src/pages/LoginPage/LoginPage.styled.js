import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 120px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4fefe;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  line-height: 55px;
  color: #35b8be;
  letter-spacing: 1.65px;
  font-family: "Inter", sans-serif;
  margin-bottom: 50px;
`;

export const FormContainer = styled.form`
  width: 695px;
  height: 283px;
  background-color: #ffffff;
  border: 1px solid rgba(53, 184, 190, 0.15);
  border-radius: 6px;
  padding: 35px 68px 42px 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
`;

export const Label = styled.label`
  width: 100px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: #08090a;
  letter-spacing: 0.6px;
  font-family: "Inter", sans-serif;
`;

export const Input = styled.input`
  width: 430px;
  height: 45px;
  padding: 10px 14px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.36px;
  background-color: #fafafa;
  border: 1px solid #dddddd;
  border-radius: 6px;
  outline: none;
  font-family: "Inter", sans-serif;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  padding-left: 186px;
`;

export const Button = styled.button`
  width: 147px;
  height: 52px;
  background-color: #35b8be;
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Inter", sans-serif;

  &:hover {
    opacity: 0.9;
  }
`;

export const CancelButton = styled(Button)`
  width: 132px;
  background-color: #ffffff;
  color: #222222;
  border: 1px solid #dddddd;
`;