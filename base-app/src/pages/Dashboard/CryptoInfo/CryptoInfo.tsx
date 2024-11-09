import { useHistory, useLocation } from "react-router-dom";
import {
  CommonMfeProps,
  MfeName,
  MfePort,
  mfeLoader,
} from "src/hooks/mfeLoader";
import { getMfePath } from "src/utils/helpers";

export const CryptoInfo = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const CryptoInfoMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
    mfeName: MfeName.CRYPTO_INFO,
    moduleName: "./App",
  });

  return (
    <CryptoInfoMfe basePath={getMfePath(pathname)} baseHistory={history} />
  );
};
