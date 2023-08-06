import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { GlobalCountries } from "../../common/countries";
import Input from "../../controls/inputs/Input";
import CountryDropDown from "../../controls/inputs/CountryDropDown";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";

function InputId() {
  return (
    <View style={styles.container}>
      <PhoneOrEmailInput />
    </View>
  );
}

export default InputId;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingBottom: 200,
  },
  input: {
    flexDirection: "row",
  },
});
