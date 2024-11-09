import { createContext, FC, StrictMode } from "react";

import "@usy-ui/base/dist/styles.css";

import { CommonMfeProps } from "./hooks/mfeLoader";
import { Routes } from "./Routes";

export const AppContext = createContext<CommonMfeProps>({
  basePath: "",
  baseHistory: null,
});

const App: FC<CommonMfeProps> = ({ basePath, baseHistory }) => {
  return (
    <StrictMode>
      <AppContext.Provider value={{ basePath, baseHistory }}>
        <Routes basePath={basePath} baseHistory={baseHistory} />
      </AppContext.Provider>
    </StrictMode>
  );
};

export default App;
