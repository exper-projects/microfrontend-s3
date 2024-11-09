/**
 * /crypto-info
 * /crypto-info/placed-trade/BTC
 */

export const getMfePath = (pathname: string, numOfRoute = 1): string => {
  const routes = pathname.split("/");
  let completedPath = "";

  for (let index = 1; index <= numOfRoute; index++) {
    completedPath += `/${routes[index]}`;
  }

  return completedPath;
};
