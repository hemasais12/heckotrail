import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import DropDownList from "./DropDownList";
import { GlobalCountries } from "../../common/countries";
import CountryDropDown from "./CountryDropDown";
import Input from "./Input";

function PhoneOrEmailInput() {
  return (
    <View style={styles.container}>
      <CountryDropDown />
      <View style={styles.input}>
        <Input />
      </View>
    </View>
  );
}

export default PhoneOrEmailInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});
