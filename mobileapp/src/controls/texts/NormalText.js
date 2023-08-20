import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function NormalText({ children, style }) {
  return <Text style={[style, styles.textStyle]}>{children}</Text>;
}

export default NormalText;

const styles = StyleSheet.create({
  textStyle: {
    color: GlobalColors.page.textColor,
  },
});
