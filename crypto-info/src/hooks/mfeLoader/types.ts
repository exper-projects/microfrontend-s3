export interface CommonMfeProps {
  baseHistory: any;
  basePath: string;
}

export enum MfeName {
  BASE_APP = "baseApp",
  CRYPTO_INFO = "cryptoInfo",
  TRANSACTIONS = "transactions",
  PLACED_TRADED = "placedTrade",
}

export enum MfePort {
  BASE_APP = 3000,
  CRYPTO_INFO = 3001,
  TRANSACTIONS = 3002,
  PLACED_TRADED = 3003,
}
