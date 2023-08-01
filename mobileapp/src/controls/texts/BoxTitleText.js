import { Pressable, StyleSheet, Text, View } from "react-native";

function BoxTitleText({ children }) {
  return <Text style={styles.boxTitle}>{children}</Text>;
}

export default BoxTitleText;

const styles = StyleSheet.create({
  boxTitle: {
    fontWeight: "bold",
  },
});
