import { useHistory, useLocation } from "react-router-dom";
import {
  CommonMfeProps,
  MfeName,
  MfePort,
  mfeLoader,
} from "src/hooks/mfeLoader";
import { getMfePath } from "src/utils/helpers";

export const PlacedTrade = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const PlacedTradeMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.PLACED_TRADED}/remoteEntry.js`,
    mfeName: MfeName.PLACED_TRADED,
    moduleName: "./App",
  });

  return (
    <PlacedTradeMfe basePath={getMfePath(pathname, 2)} baseHistory={history} />
  );
};
