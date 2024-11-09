import { useContext, useMemo } from "react";

import { Button, Drawer, DrawerContent, DrawerHeader } from "@usy-ui/base";
import dayjs from "dayjs";
import { useHistory, useParams } from "react-router-dom";
import { AppContext } from "src/App";
import { coinData } from "src/data/coinData";
import { mapParams } from "src/utils/helpers";

import { Container, CtaContainer, Row } from "./CoinDetailsDrawer.styled";

export const CoinDetailsDrawer = () => {
  const history = useHistory();
  const { baseHistory, basePath } = useContext(AppContext);
  const { coinCode } = useParams<{ coinCode: string }>();

  const coinDetail = useMemo(() => {
    return coinData.find(
      ({ code }) => code.toLowerCase() === coinCode.toLowerCase()
    );
  }, [coinCode]);

  const redirectToTransactions = () => {
    baseHistory.push("/transactions");
  };

  const redirectToPlacedTrade = () => {
    const placedTradePath = mapParams(":basePath/placed-trade/:coinCode", {
      basePath,
      coinCode,
    });
    baseHistory.push(placedTradePath);
  };

  const handleDrawerClose = () => {
    history.goBack();
  };

  const renderCoinDetails = () => {
    return (
      <Container>
        <h3 style={{ fontWeight: 300 }}>
          <strong>{coinDetail.code}</strong>
        </h3>
        <Row>
          <span>Code</span>
          <strong>{coinDetail.code}</strong>
        </Row>
        <Row>
          <span>Name</span>
          <strong>{coinDetail.name}</strong>
        </Row>
        <Row>
          <span>Bid</span>
          <strong>{coinDetail.bid}</strong>
        </Row>
        <Row>
          <span>Ask</span>
          <strong>{coinDetail.ask}</strong>
        </Row>
        <Row>
          <span>Update Time</span>
          <strong>
            {dayjs(coinDetail.updatedTime).format("DD MMM, YYYY")}
          </strong>
        </Row>
        <CtaContainer>
          <Button variant="outline" onClick={redirectToTransactions}>
            My Transactions
          </Button>
          <Button variant="primary" onClick={redirectToPlacedTrade}>
            Placed Trade
          </Button>
        </CtaContainer>
      </Container>
    );
  };

  return (
    <Drawer
      header={<DrawerHeader title="Coin Details" onClose={handleDrawerClose} />}
    >
      <DrawerContent>{renderCoinDetails()}</DrawerContent>
    </Drawer>
  );
};
