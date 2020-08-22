import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CardFormScreen from "./app/screens/PaymentScreen";
import {
  NavigationContainer,
  useNavigation,
  BaseRouter,
} from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

import stripe from "tipsi-stripe";
import BusinessScreen from "./app/screens/BusinessScreen";
import BusinessDetailsScreen from "./app/screens/BusinessDetailsScreen";
import BottomNavigator from "./app/navigation/BottomNavigator";
import { enableScreens } from "react-native-screens";
import AdminScreen from "./app/screens/AdminScreen";
import LandingScreen from "./app/screens/LandingScreen";

stripe.setOptions({
  publishableKey:
    "pk_test_51HCS2kHdexY6rnU08KP4GbTaLjVpmrbxeldbcoG8dLNFP7mBzWxp8fNlktatdTcgB4sZxmOi4TNzJOwbi5f2Fgs600FFsVmAef",
  merchantId: "MERCHANT_ID", // Optional
  androidPayMode: "test", // Android only
});

enableScreens();

export default function App() {
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        <BottomNavigator></BottomNavigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
