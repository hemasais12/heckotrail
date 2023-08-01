import React, { useState } from "react";
import { GlobalColors } from "../../common/colors";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const PercentageBar = ({ bgcolor, completed }) => {
  return (
    <View style={styles.containerStyles}>
      <View style={styles.fillerStyles}></View>
    </View>
  );
};
export default PercentageBar;

const styles = StyleSheet.create({
  containerStyles: {
    height: 10,
    width: "100%",
    backgroundColor: GlobalColors.progressBar.backgroundColor,
    borderRadius: 3,
    borderColor: GlobalColors.progressBar.borderColor,
    borderWidth: 1,
  },
  fillerStyles: {
    height: "100%",
    width: "50%",
    backgroundColor: GlobalColors.progressBar.filledColor,
    borderRadius: 2,
  },
  labelStyles: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
});
