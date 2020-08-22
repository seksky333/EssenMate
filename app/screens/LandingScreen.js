import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Platform,
} from "react-native";
import AppButton from "../components/AppButton";
import { color } from "react-native-reanimated";
import colors from "../config/colors";

function Landing(props) {
  return (
    <View blurRadius={2} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton
          buttonStyle={{ backgroundColor: colors.primary,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            width: "100%",
            marginVertical: 8,
           }}
          textStyle={{
            fontSize: 18,
            textTransform: "uppercase",
            color: colors.white,
          }}
          title="Register"
          color="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end", //primary
    alignItems: "center", //secondary
  },
  logoContainer: {
    position: "absolute", //follows parent's style
    top: "5%",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 300,
    height: 300,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 16,
  },
});

export default Landing;
