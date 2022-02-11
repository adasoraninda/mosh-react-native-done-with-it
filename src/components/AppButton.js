import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button(color)}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: (color) => ({
    width: "100%",
    backgroundColor: colors[color],
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  }),
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});