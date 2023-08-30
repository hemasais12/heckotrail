import { View, StyleSheet, Text } from "react-native";
import { GlobalColors } from "../../common/colors";
import { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import { Zocial } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { GlobalSizes } from "../../common/sizes";
import StandardInput from "./StandardInput";

function PhoneOrEmailInput({
  viewStyle,
  onChangeText,
  isMobileView = true,
  error,
}) {
  const [inputId, setInputId] = useState("");
  let countryCode = "";

  function inputChangeHandler(text) {
    setInputId(text);
    if (!isMobileView) onChangeText(text);
    else onChangeText(countryCode + text);
  }

  function EmailView() {
    return (
      <View style={styles.emailContainer}>
        <Entypo name="email" size={24} color={GlobalColors.icons.color} />
      </View>
    );
  }

  function countrySelectHandler(country) {
    countryCode = country.value;
  }

  return (
    <View style={{ ...styles.container, ...viewStyle }}>
      {!isMobileView ? (
        <EmailView />
      ) : (
        <CountryDropDown onCountrySelected={countrySelectHandler} />
      )}

      <StandardInput
        keyboardType={isMobileView ? "number-pad" : "email-address"}
        label={isMobileView ? "Mobile number" : "Email"}
        placeholder={isMobileView ? "Enter Mobile number" : "Enter Email"}
        viewStyle={{ flex: 1 }}
        onChangeText={inputChangeHandler}
        error={error}
      />
    </View>
  );
}

export default PhoneOrEmailInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  emailContainer: {
    flexDirection: "row",
    backgroundColor: GlobalColors.input.textBGColor,
    borderColor: GlobalColors.input.borderColor,
    borderWidth: GlobalSizes.input.borderWidth,
    borderRadius: GlobalSizes.input.borderRadius,
    paddingLeft: GlobalSizes.input.paddingLeft,
    paddingRight: GlobalSizes.input.paddingRight,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    height: 50,
    marginTop: 6,
  },
});
