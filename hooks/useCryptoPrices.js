import useSWR from "swr";

import { coinGeckoApi } from "../lib/api/coinGeckoApi";

/**
 * @param {string} cryptoCurrenciesSeparatedByComma "ethereum,bitcoin"
 */
const fetchCryptoPrices = async (cryptoCurrenciesSeparatedByComma) => {
  const result = await coinGeckoApi.get("/simple/price", {
    params: {
      ids: cryptoCurrenciesSeparatedByComma,
      vs_currencies: "usd",
      include_24hr_change: true,
    },
  });
  return result.data;
};

/**
 * @param {string[]} cryptoCurrencies ["ethereum", "bitcoin"]
 */
export const useCryptoPrices = (cryptoCurrencies) => {
  return useSWR(cryptoCurrencies.join(","), (joinedCryptoCurrencies) =>
    fetchCryptoPrices(joinedCryptoCurrencies)
  );
};
