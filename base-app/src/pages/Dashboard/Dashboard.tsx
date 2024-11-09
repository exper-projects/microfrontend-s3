import { useEffect, useMemo, useState } from "react";

import { useLocation, useHistory } from "react-router-dom";
import { BaseRoute } from "src/common/constants";
import { getMfePath } from "src/utils/helpers";

import { StyledHeader, StyledTab, StyledTabs } from "./Dashboard.styled";

const Dashboard = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState(getMfePath(pathname));

  useEffect(() => {
    setActiveTab(getMfePath(pathname));
  }, [pathname]);

  const changeTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      history.push(tab);
    }
  };

  const tabs = useMemo(() => {
    return [
      {
        isActive: activeTab === BaseRoute.CryptoInfo,
        title: "Crypto Info",
        onClick: () => {
          changeTab(BaseRoute.CryptoInfo);
        },
      },
      {
        isActive: activeTab === BaseRoute.Holdings,
        title: "Holdings",
        onClick: () => {
          changeTab(BaseRoute.Holdings);
        },
      },
    ];
  }, [activeTab]);

  const renderHeader = () => {
    return (
      <StyledHeader>
        <h3>Online Crypto Trading</h3>
      </StyledHeader>
    );
  };

  const renderTabs = () => {
    return (
      <StyledTabs>
        {tabs.map(({ title, isActive, onClick }) => (
          <StyledTab key={title} isActive={isActive} onClick={onClick}>
            {title}
          </StyledTab>
        ))}
      </StyledTabs>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderTabs()}
    </>
  );
};

export default Dashboard;
