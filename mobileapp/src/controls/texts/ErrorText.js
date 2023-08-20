import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function ErrorText({ children }) {
  return (
    <Text numberOfLines={1} style={styles.container}>
      {children}
    </Text>
  );
}

export default ErrorText;

const styles = StyleSheet.create({
  container: {
    color: GlobalColors.app.errorColor,
  },
});
