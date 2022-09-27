export interface ExchangeRate {
  id: string;
  pointDate: string;
  date: string;
  ask: string;
  bid: string;
  trendAsk: number;
  trendBid: number;
  currency: string;
}

export interface ResponseFromServer {
  data: ExchangeRate;
}
