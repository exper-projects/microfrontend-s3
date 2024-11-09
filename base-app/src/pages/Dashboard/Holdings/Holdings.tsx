import { useHistory, useLocation } from "react-router-dom";
import {
  CommonMfeProps,
  MfeName,
  MfePort,
  mfeLoader,
} from "src/hooks/mfeLoader";
import { getMfePath } from "src/utils/helpers";

export const Holdings = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const HoldingsMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.HOLDINGS}/remoteEntry.js`,
    mfeName: MfeName.HOLDINGS,
    moduleName: "./App",
  });

  return <HoldingsMfe basePath={getMfePath(pathname)} baseHistory={history} />;
};
