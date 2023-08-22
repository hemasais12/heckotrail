import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StandardButton from "../controls/buttons/StandardButton";
import SearchTextBox from "../views/SearchTextBox";
import ServiceOrder from "../views/ServiceOrder";
import { FlatList } from "react-native";
import PhoneOrEmailInput from "../controls/texts/PhoneOrEmailInput";
import VendorProfileOverview from "../views/VendorProfileOverview";
import PopupDropDown from "../controls/inputs/PopupDropDown";
import { GlobalCountries } from "../common/countries";

//npx expo start --tunnel
function AppViewTry() {
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

  function getText() {
    GlobalCountries.list.map((obj, index) => console.log(obj.flag));
    return "test";
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchTextBox}>
        <SearchTextBox />
      </View>
      <PopupDropDown data={GlobalCountries.list} />
      <PhoneOrEmailInput />
      <StandardButton>Login</StandardButton>
      <FlatList data={serviceOrderList} renderItem={renderOrderDetailItem} />
    </View>
  );
}

export default AppViewTry;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 8,
    flex: 1,
  },
  searchTextBox: {
    flexDirection: "row",
    marginLeft: 8,
    marginBottom: 8,
  },
});
