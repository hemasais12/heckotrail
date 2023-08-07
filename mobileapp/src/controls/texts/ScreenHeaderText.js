import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function ScreenHeaderText({ children }) {
  return <Text style={styles.header}>{children}</Text>;
}

export default ScreenHeaderText;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalColors.page.titleColor,
  },
});
