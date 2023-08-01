import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function BoxTitleText({ children }) {
  return <Text style={styles.boxTitle}>{children}</Text>;
}

export default BoxTitleText;

const styles = StyleSheet.create({
  boxTitle: {
    fontWeight: "bold",
    fontSize: GlobalSizes.orderView.titleFontSize,
  },
});
