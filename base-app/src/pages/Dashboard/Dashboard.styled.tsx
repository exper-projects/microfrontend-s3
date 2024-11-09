import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  padding: 10px;
`;

export const StyledHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
`;

export const StyledTabs = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
`;

export const StyledTab = styled.span<{ isActive: boolean }>`
  ${({ isActive }) => css`
    height: 44px;
    display: inline-block;
    border: none;
    border-bottom: 3px solid ${isActive ? "#c91f37" : "transparent"};
    font-weight: ${isActive ? "bold" : "normal"};
    background-color: transparent;
    opacity: 0.8;
    padding: 12px 24px;
    cursor: pointer;
  `}
`;

export const WrapperOutlet = styled.div`
  padding: 10px;
`;
