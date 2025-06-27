import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 120px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);
  transition: background-color 0.3s ease;

  [data-theme="light"] & {
    background-color: #f4fefe;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  line-height: 55px;
  color: var(--primary);
  letter-spacing: 1.65px;
  font-family: "Inter", sans-serif;
  margin-bottom: 50px;
`;

export const FormContainer = styled.form`
  width: 695px;
  height: 283px;
  background-color: var(--card-bg);
  border: 1px solid rgba(53, 184, 190, 0.15);
  border-radius: 6px;
  padding: 35px 68px 42px 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Label = styled.label`
  width: 100px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  color: var(--text);
  letter-spacing: 0.6px;
  font-family: "Inter", sans-serif;
  transition: color 0.3s ease;
`;

export const Input = styled.input`
  width: 430px;
  height: 45px;
  padding: 10px 14px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.36px;
  background-color: var(--input-bg);
  color: var(--text);
  border: 1px solid var(--input-border);
  border-radius: 6px;
  outline: none;
  font-family: "Inter", sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  [data-theme="light"] & {
    background-color: #fafafa;
    border: 1px solid #dddddd;
  }

  [data-theme="dark"] & {
    border: 1px solid #666666;
  }
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
  background-color: var(--primary);
  color: var(--button-text);
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #2ca5aa;
  }
`;

export const CancelButton = styled(Button)`
  width: 132px;
  background-color: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--input-border);

  [data-theme="light"] & {
    background-color: #ffffff;
    color: #222222;
    border: 1px solid #dddddd;
  }

  [data-theme="dark"] & {
    border: 1px solid #666666;
  }
`;