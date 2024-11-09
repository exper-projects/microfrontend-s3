import { Route } from "react-router-dom";
import { AppRoutes } from "src/common/constants";
import { coinData } from "src/data/coinData";

import { CoinDetailsDrawer } from "./CoinDetailsDrawer/CoinDetailsDrawer";
import { CoinInfoRow } from "./CoinInfoRow";
import { Container } from "./Overview.styled";

export const Overview = () => {
  return (
    <Container>
      {coinData.map(({ name, code, bid, ask, updatedTime }) => (
        <CoinInfoRow
          key={code}
          name={name}
          code={code}
          bid={bid}
          ask={ask}
          updatedTime={updatedTime}
        />
      ))}
      <Route path={AppRoutes.COIN_DETAILS}>
        <CoinDetailsDrawer />
      </Route>
    </Container>
  );
};
