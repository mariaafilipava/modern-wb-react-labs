import styled from "styled-components";

export const PageWrapper = styled.main`
  padding: 60px 40px;
  background-color: var(--bg);
  transition: background-color 0.3s ease;

  [data-theme="light"] & {
    background-color: #f4fefe;
  }
`;

export const HeaderWrapper = styled.div``;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 400;
  color: #35b8be;
  letter-spacing: 1.65px;
  line-height: 55px;
  margin-bottom: 26px;
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--text);
  line-height: 27px;
  letter-spacing: 0.36px;
  width: 466px;
  margin: 0 auto;
`;

export const TooltipWrapper = styled.span`
  color: #35b8be;
  cursor: pointer;
  position: relative;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: 0.2s ease-in-out;
  font-size: 14px;
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 50px 0 60px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  width: 147px;
  height: 52px;
  border-radius: 6px;
  border: 1px solid rgba(53, 184, 190, 0.6);
  background-color: transparent;
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &.active {
    background-color: #35b8be;
    color: #ffffff;
    border: none;
  }

  &:hover:not(.active) {
    border-color: #35b8be;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
  justify-content: center;
  margin-top: 40px;
`;

export const SeeMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

export const SeeMoreButton = styled.button`
  background-color: #35b8be;
  color: white;
  padding: 12px 32px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  width: 147px;
  height: 52px;

  &:hover {
    background-color: #2ca5aa;
  }
`;
