import { StyleSheet, Text, View } from "react-native";
import { GlobalSizes } from "../../common/sizes";
import React from "react";
import ScreenHeaderText from "../texts/ScreenHeaderText";
import ScreenSubHeaderText from "../texts/ScreenSubHeaderText";
import NormalText from "../texts/NormalText";

function VendorNameDetails({ name, shopName, experience, timings }) {
  return (
    <View style={styles.container}>
      <ScreenHeaderText>{name}</ScreenHeaderText>
      <ScreenSubHeaderText>{shopName}</ScreenSubHeaderText>
      <View style={styles.experienceView}>
        <NormalText>{experience}</NormalText>
        <NormalText>{timings}</NormalText>
      </View>
      <View style={styles.ratingView}>
        <NormalText>⭐⭐⭐⭐</NormalText>
        <NormalText>4.0</NormalText>
      </View>
    </View>
  );
}
export default VendorNameDetails;

const styles = StyleSheet.create({
    container: {
      width: GlobalSizes.vendorProfile.width,
      marginVertical: GlobalSizes.vendorProfile.marginVertical,
    },
  experienceView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingView:{
    flexDirection: "row",
  },
});
