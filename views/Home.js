import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { Colors } from "@kevinrodriguez-io/pigment-core";

import { CenteredContainer } from "../components/CenteredContainer";

import { useCryptoPrices } from "../hooks/useCryptoPrices";
import { CryptoCurrencyCard } from "../components/CryptoCurrencyCard";

export const Home = () => {
  const { data, error } = useCryptoPrices([
    "bitcoin",
    "ethereum",
    "solana",
    "dogecoin",
  ]);
  const isLoading = !data && !error;
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.homeContainer]}>
      <Text style={styles.title}>Crypto Prices</Text>
      {isLoading ? (
        <ActivityIndicator
          color={Colors.flatWhite.light}
          size="large"
          style={{ flex: 1 }}
        />
      ) : (
        <ScrollView>
          {Object.entries(data).map(([crypto, { usd, usd_24h_change }]) => (
            <CryptoCurrencyCard
              key={crypto}
              cryptoCurrencyName={crypto}
              currentPrice={usd}
              dailyChange={usd_24h_change}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  homeContainer: {
    backgroundColor: Colors.flatBlue.dark,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    padding: 16,
    color: Colors.flatWhite.light,
  },
  container: {
    padding: 24,
  },
});
