import React, { useState } from "react";
import { GlobalSizes } from "../../common/sizes";
import { GlobalColors } from "../../common/colors";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import BoxPercentageText from "../texts/BoxPercentageText";

const PercentageBar = ({ bgcolor, completed }) => {
  return (
    <View>
      <BoxPercentageText>{completed}</BoxPercentageText>
      <View style={styles.overallProgressBar}>
        <View style={styles.completedBar}></View>
      </View>
    </View>
  );
};
export default PercentageBar;

const styles = StyleSheet.create({
  container: {
    height: 6,
    width: "100%",
    backgroundColor: GlobalColors.progressBar.backgroundColor,
    borderRadius: 3,
    borderColor: GlobalColors.progressBar.borderColor,
    borderWidth: 1,
  },
  overallProgressBar: {
    height: 6,
    width: "100%",
    backgroundColor: GlobalColors.progressBar.backgroundColor,
    borderRadius: 3,
    borderColor: GlobalColors.progressBar.borderColor,
    borderWidth: 1,
  },
  completedBar: {
    height: "100%",
    width: "50%",
    backgroundColor: GlobalColors.progressBar.filledColor,
    borderRadius: 2,
  },
});
