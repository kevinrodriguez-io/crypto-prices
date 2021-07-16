import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Colors } from "@kevinrodriguez-io/pigment-core";

import { useCryptoPrices } from "../hooks/useCryptoPrices";
import { CryptoCurrencyCard } from "../components/CryptoCurrencyCard";

export const Home = () => {
  const { data, error, mutate } = useCryptoPrices([
    "bitcoin",
    "ethereum",
    "solana",
    "dogecoin",
  ]);
  const isLoading = !data && !error;
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.homeContainer]}>
      <Text style={styles.title}>Precios crypto</Text>
      <ScrollView
        refreshControl={
          <RefreshControl
            tintColor={Colors.flatPowderBlue.light}
            refreshing={isLoading}
            onRefresh={() => {
              mutate();
            }}
          />
        }
      >
        {data ? (
          Object.entries(data).map(([crypto, { usd, usd_24h_change }]) => (
            <CryptoCurrencyCard
              key={crypto}
              cryptoCurrencyName={crypto}
              currentPrice={usd}
              dailyChange={usd_24h_change}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color={Colors.flatPowderBlue.light} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  homeContainer: {
    backgroundColor: Colors.flatWhite.light,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    padding: 16,
    color: Colors.flatBlack.dark,
  },
  container: {
    padding: 24,
  },
});
