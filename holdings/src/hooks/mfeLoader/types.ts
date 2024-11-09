export interface CommonMfeProps {
  baseHistory: History;
  basePath: string;
}

export enum MfeName {
  BASE_APP = "baseApp",
  CRYPTO_INFO = "cryptoInfo",
  HOLDINGS = "holdings",
  PLACED_TRADED = "placedTrade",
}

export enum MfePort {
  BASE_APP = 3000,
  CRYPTO_INFO = 3001,
  HOLDINGS = 3002,
  PLACED_TRADED = 3003,
}
