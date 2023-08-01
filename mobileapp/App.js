import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RoundedButton from "./src/controls/buttons/RoundedButton";
import ServiceOrder from "./src/views/ServiceOrder";

export default function App() {
  let orderDetail = {
    title: "Owner Name (Bike Number)",
    highlights: [
      { id: 1, name: "Package / Service Type" },
      { id: 2, name: "Estimated Value: ????" },
    ],
  };

  return (
    <View style={styles.container}>
      <ServiceOrder orderDetail={orderDetail}></ServiceOrder>
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
    paddingHorizontal: 10,
  },
});
