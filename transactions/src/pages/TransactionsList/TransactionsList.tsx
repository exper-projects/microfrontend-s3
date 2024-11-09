import { FC } from "react";

import { ArrowLeftIcon, Button } from "@usy-ui/base";
import { Dummy } from "src/components/Dummy";

interface TransactionsListProps {
  baseHistory: any;
}

export const TransactionsList: FC<TransactionsListProps> = ({
  baseHistory,
}) => {
  const goBack = () => {
    baseHistory.goBack();
  };

  return (
    <Dummy>
      <Button size="small" onClick={goBack}>
        <ArrowLeftIcon />
      </Button>
      Transactions List
      <span />
    </Dummy>
  );
};
