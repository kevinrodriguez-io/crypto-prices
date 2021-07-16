import React from "react";
import { StyleSheet, View } from "react-native";

export const CenteredContainer = () => {
  return <View style={styles.centeredContainer} />;
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
