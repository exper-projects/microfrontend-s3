import { FC } from "react";

import { ArrowLeftIcon, Button } from "@usy-ui/base";
import { Dummy } from "src/components/Dummy";

interface HoldingsListProps {
  baseHistory: any;
}

export const HoldingsList: FC<HoldingsListProps> = ({ baseHistory }) => {
  const goBack = () => {
    baseHistory.goBack();
  };

  return (
    <Dummy>
      <Button size="small" onClick={goBack}>
        <ArrowLeftIcon />
      </Button>
      Holdings List
      <span />
    </Dummy>
  );
};
