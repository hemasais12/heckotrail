import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import CustomPressable from "../commons/CustomPressable";

function Link({ children, onLinkClick }) {
  return (
    <CustomPressable onPress={onLinkClick}>
      <Text style={styles.link}>{children}</Text>
    </CustomPressable>
  );
}

export default Link;

const styles = StyleSheet.create({
  link: {
    color: GlobalColors.app.linkColor,
    fontWeight: "bold",
  },
});
