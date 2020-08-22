import React from "react";
import { View, StyleSheet, Platform, Button } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import AppButton from "./AppButton";

function FollowNotice(props) {
  return (
    <View style={styles.container}>
      <AppButton
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
        title="Follow"
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 30,
    width: "100%",
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 1,
    //zIndex for Android
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  button: {
    backgroundColor: colors.lightBlue,
    width: "20%",
    borderRadius: 25,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
  },
  text: {
    color: colors.white,
  },
});

export default FollowNotice;
