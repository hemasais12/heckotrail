import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function Link({ children }) {
  return <Text style={styles.link}>{children}</Text>;
}

export default Link;

const styles = StyleSheet.create({
  link: {
    color: GlobalColors.app.linkColor,
  },
});
