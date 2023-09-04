import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function ScreenSubHeaderText({ children }) {
  return <Text style={styles.subHeader}>{children}</Text>;
}

export default ScreenSubHeaderText;

const styles = StyleSheet.create({
  subHeader: {
    color: GlobalColors.page.textColor,
    marginTop: 8,
  },
});
