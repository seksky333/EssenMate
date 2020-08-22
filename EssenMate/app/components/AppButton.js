import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({
  buttonStyle,
  textStyle,
  title,
  onPress,
  color = "secondary",
}) {
  return (
    <>
      {buttonStyle ? (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
          <Text style={textStyle ? textStyle : styles.text}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors[color] }]}
          onPress={onPress}
        >
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.white,
  },
});

export default AppButton;
