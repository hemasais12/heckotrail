import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalSizes } from "../../common/sizes";
import { GlobalColors } from "../../common/colors";

function BoxPercentageText({ children }) {
  return <Text style={styles.percentageBarText}>{children}</Text>;
}

export default BoxPercentageText;

const styles = StyleSheet.create({
  percentageBarText: {
    color: GlobalColors.progressBar.percentageColor,
    textAlign: "right",
    fontSize: GlobalSizes.orderView.percentageText,
    marginBottom: 2,
  },
});
