import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RoundedButton from "./src/controls/buttons/RoundedButton";
import SearchTextBox from "./src/views/SearchTextBox";
import ServiceOrder from "./src/views/ServiceOrder";
import { FlatList } from "react-native";
import PhoneOrEmailInput from "./src/controls/texts/PhoneOrEmailInput";
import { GlobalCountries } from "./src/common/countries";

export default function App() {
  const [selected, setSelected] = useState(undefined);

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

  function getCountries() {
    GlobalCountries.list.map((country) => {
      console.log(
        country.name +
          "," +
          country.dialCode +
          "," +
          country.isoCode +
          "," +
          country.flag
      );
    });
  }

  const data = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
    { label: "Four", value: "4" },
    { label: "Five", value: "5" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SearchTextBox></SearchTextBox>

      <PhoneOrEmailInput />
      <RoundedButton>Login</RoundedButton>
      <FlatList data={serviceOrderList} renderItem={renderOrderDetailItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 8,
  },
});
