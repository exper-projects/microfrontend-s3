import { useHistory, useLocation } from "react-router-dom";
import {
  CommonMfeProps,
  MfeName,
  MfePort,
  mfeLoader,
} from "src/hooks/mfeLoader";
import { getMfePath } from "src/utils/helpers";

export const Transactions = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const TransactionsMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.TRANSACTIONS}/remoteEntry.js`,
    mfeName: MfeName.TRANSACTIONS,
    moduleName: "./App",
  });

  return (
    <TransactionsMfe basePath={getMfePath(pathname)} baseHistory={history} />
  );
};
