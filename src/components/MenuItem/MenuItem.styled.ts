import styled from "styled-components";

export const MenuCard = styled.div`
  display: flex;
  width: 580px;
  height: 200px;
  padding: 20px;
  gap: 30px;
  background-color: var(--card-bg);
  border: 1px solid rgba(53, 184, 190, 0.2);
  border-radius: 5px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

export const MenuImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  padding: 2px 0;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 6px;
`;

export const MenuTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  max-width: 65%;
`;

export const MenuPrice = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: var(--primary);
  white-space: nowrap;
  margin-top: 3px;
`;

export const MenuDescription = styled.p`
  font-size: 15px;
  color: var(--text);
  line-height: 1.4;
  margin: 0 0 10px;
  max-width: 400px;
  flex-shrink: 1;
  text-align: left;
`;

export const MenuActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 45px;
  padding: 4px 8px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  border: 1px solid #666666;
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  text-align: center;
`;

export const AddToCartButton = styled.button`
  background-color: var(--primary);
  color: var(--button-text);
  border: none;
  padding: 10px 18px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  height: 45px;
  width: 147px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2ca5aa;
  }
`;

