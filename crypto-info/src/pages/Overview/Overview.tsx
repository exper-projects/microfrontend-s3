import { Flex, usySpacing } from "@usy-ui/base";
import { Route } from "react-router-dom";
import { AppRoutes } from "src/common/constants";
import { coinData } from "src/data/coinData";

import { CoinDetailsDrawer } from "./CoinDetailsDrawer/CoinDetailsDrawer";
import { CoinThumbnail } from "./CoinThumbnail";

export const Overview = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap={usySpacing.px32}
        wrap="wrap"
        paddingProps={{ padding: usySpacing.px32 }}
      >
        {coinData.map(({ iconUrl, name, code, bid, ask }) => (
          <CoinThumbnail
            key={code}
            iconUrl={iconUrl}
            coinName={name}
            coinCode={code}
            bidPrice={bid}
            askPrice={ask}
          />
        ))}
      </Flex>
      <Route path={AppRoutes.COIN_DETAILS}>
        <CoinDetailsDrawer />
      </Route>
    </>
  );
};
