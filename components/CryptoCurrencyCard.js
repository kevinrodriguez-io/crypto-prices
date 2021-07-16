import { Colors } from "@kevinrodriguez-io/pigment-core";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "../lib/tools/capitalize";
import { Ionicons } from "@expo/vector-icons";
/**
 *
 * @param {Object} props
 * @param {string} props.cryptoCurrencyName
 * @param {number} props.currentPrice
 * @param {number} props.dailyChange
 */
export const CryptoCurrencyCard = ({
  cryptoCurrencyName,
  currentPrice,
  dailyChange,
}) => {
  return (
    <View style={styles.cryptoCurrencyCard}>
      <View style={styles.centeredRow}>
        <View style={styles.column}>
          <Text style={styles.cryptoNameText}>
            {capitalize(cryptoCurrencyName)}
          </Text>
          <Text>${currentPrice}</Text>
        </View>
        <View style={styles.column}>
          <Text>
            24HR&nbsp;
            <Text
              style={dailyChange > 0 ? styles.isPositive : styles.isNegative}
            >
              {dailyChange.toFixed(2)}%
              {dailyChange > 0 ? (
                <Ionicons name="arrow-up" />
              ) : (
                <Ionicons name="arrow-down" />
              )}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cryptoCurrencyCard: {
    margin: 12,
    padding: 24,
    backgroundColor: Colors.flatPowderBlue.light,
    borderRadius: 5,
    // Shadows, you can use https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: Colors.flatBlack.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
  },
  cryptoNameText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  isPositive: {
    color: Colors.flatGreen.dark,
  },
  isNegative: {
    color: Colors.flatRed.dark,
  },
});
