import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function ScreenSubHeaderText({ children }) {
  return <Text style={styles.subHeader}>{children}</Text>;
}

export default ScreenSubHeaderText;

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 12,
    color: GlobalColors.page.textColor,
    marginLeft: 8,
    marginTop: 8,
  },
});
