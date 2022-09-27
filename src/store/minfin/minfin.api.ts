import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ExchangeRate, ResponseFromServer } from '../../types/response';

export const minfinApi = createApi({
  reducerPath: 'minfin/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.minfin.com.ua',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    currencyRateFromUAH: build.query<ExchangeRate, string>({
      query: (toCurrency: string) => ({
        url: `/mb/latest/${process.env.REACT_APP_MINFIN_API_KEY}`,
        params: {
          currency: toCurrency,
        },
      }),
      transformResponse: (response: ResponseFromServer) => response.data,
    }),
  }),
});

export const { useCurrencyRateFromUAHQuery } = minfinApi;
