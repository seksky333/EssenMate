import React from "react";
import { View, StyleSheet } from "react-native";
import CountDown from "react-native-countdown-component";
import colors from "../config/colors";
function AppCountDown({ countDownVal }) {
  return (
    <>
      <CountDown
        size={15}
        until={countDownVal}
        onFinish={() => alert("Finished")}
        digitStyle={{
          backgroundColor: "#FFF",
        }}
        digitTxtStyle={{ color: colors.counterDown }}
        timeLabelStyle={{ color: "red", fontWeight: "bold" }}
        separatorStyle={{ color: colors.counterDown }}
        timeToShow={["H", "M", "S"]}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppCountDown;
