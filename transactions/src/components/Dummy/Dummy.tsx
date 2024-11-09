import { FC, ReactNode } from "react";

import styled from "styled-components";

const StyledDummy = styled.div`
  background-color: #c91f37;
  color: #fff;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface DummyProps {
  children: ReactNode;
}

export const Dummy: FC<DummyProps> = ({ children }) => {
  return <StyledDummy>{children}</StyledDummy>;
};
