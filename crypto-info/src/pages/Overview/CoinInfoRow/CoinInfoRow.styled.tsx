import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 6px 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin: 5px 0;
  box-sizing: border-box;
`;

export const CoinInfoContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const ColumnDirection = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 14px;
`;

export const CtaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinName = styled.h3`
  font-weight: 600;
  margin: 0;
`;

export const CoinCode = styled.h4`
  font-weight: 300;
  margin: 6px 0 0;
`;

export const Price = styled.p`
  margin: 0;
`;
