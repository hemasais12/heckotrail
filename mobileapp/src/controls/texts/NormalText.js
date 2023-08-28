import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function NormalText({ children, style }) {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
}

export default NormalText;

const styles = StyleSheet.create({
  textStyle: {
    color: GlobalColors.page.textColor,
  },
});
