import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function NormalText({ children }) {
  return <Text style={styles.mainContainer}>{children}</Text>;
}

export default NormalText;

const styles = StyleSheet.create({
  mainContainer: {
    color: GlobalColors.page.textColor,
  },
});
