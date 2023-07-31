import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RoundedButton from "./src/controls/buttons/RoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <RoundedButton>Login</RoundedButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffFFFf",
    alignItems: "center",
    justifyContent: "center",
  },
});
