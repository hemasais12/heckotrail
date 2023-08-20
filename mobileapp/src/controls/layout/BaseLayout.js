import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import CustomPressable from "../commons/CustomPressable";

function BaseLayout({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.app.bgcolor,
  },
});
