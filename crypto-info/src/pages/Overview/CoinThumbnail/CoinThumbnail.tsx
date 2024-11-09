import { Box, Button, Flex, Panel, Typography, usySpacing } from "@usy-ui/base";
import { useHistory, useLocation } from "react-router-dom";
import { AppRoutes } from "src/common/constants";
import { mapParams } from "src/utils/helpers";

type CoinThumbnailProps = {
  iconUrl: string;
  coinCode: string;
  coinName: string;
  bidPrice: string;
  askPrice: string;
};

export const CoinThumbnail = ({
  iconUrl,
  coinCode,
  coinName,
  bidPrice,
  askPrice,
}: CoinThumbnailProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const viewCoinDetail = (code: string) => {
    const completedPath = mapParams(AppRoutes.COIN_DETAILS, {
      basePath: pathname,
      coinCode: code,
    });
    console.log(completedPath);
    history.push(completedPath);
  };

  const renderCoinData = () => {
    return (
      <>
        <Flex
          alignItems="center"
          marginProps={{ marginBottom: usySpacing.px4 }}
        >
          <img src={iconUrl} width={20} height={20} alt={coinName} />
          &nbsp;&nbsp;
          <Typography weight="semibold">{`${coinName}(${coinCode})`}</Typography>
        </Flex>
        <Box paddingProps={{ paddingLeft: usySpacing.px2 }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Typography size="small">Bid</Typography>
            <Typography size="small">{bidPrice}</Typography>
          </Flex>
          <Flex justifyContent="space-between">
            <Typography size="small">Ask</Typography>
            <Typography size="small">{askPrice}</Typography>
          </Flex>
        </Box>
        <Flex
          justifyContent="center"
          gap={usySpacing.px10}
          marginProps={{ marginTop: usySpacing.px14 }}
        >
          <Button
            variant="outline"
            size="tiny"
            onClick={() => viewCoinDetail(coinCode)}
            noSole
          >
            View Detail
          </Button>
        </Flex>
      </>
    );
  };

  return (
    <Panel
      widthProps={{ minWidth: "250px", maxWidth: "250px" }}
      heightProps={{ minHeight: "150px" }}
      paddingProps={{ padding: usySpacing.px18 }}
    >
      {renderCoinData()}
    </Panel>
  );
};
