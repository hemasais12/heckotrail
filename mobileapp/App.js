import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RoundedButton from "./src/controls/buttons/RoundedButton";
import SearchTextBox from "./src/controls/searchBar/SearchTextBox";
import ServiceOrder from "./src/views/ServiceOrder";
import { FlatList } from "react-native";

export default function App() {
  let orderDetail = {
    title: "Owner Name (Bike Number)",
    highlights: [
      { id: 1, name: "Package / Service Type" },
      { id: 2, name: "Estimated Value: ????" },
      { id: 3, name: "Some other info 1111" },
    ],
  };

  let serviceOrderList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function renderOrderDetailItem({ item, index }) {
    return (
      <ServiceOrder orderDetail={orderDetail} index={index}></ServiceOrder>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={serviceOrderList}
        renderItem={renderOrderDetailItem}
        style={styles.flexContainer}
      />
      <SearchTextBox></SearchTextBox>
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
    padding: 8,
  },
  flexContainer: {
    flex: 1,
    width: "100%",
  },
});
