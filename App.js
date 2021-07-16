import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import { Home } from "./views/Home";

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
};

export default App;