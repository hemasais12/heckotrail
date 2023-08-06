import { View, StyleSheet, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalCountries } from "../../common/countries";
import DropDown from "./DropDown";
import { GlobalSizes } from "../../common/sizes";
import CustomPressable from "../commons/CustomPressable";
import { useState } from "react";

function CountryDropDown() {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  function showCountryOptions() {
    setIsOptionsVisible(true);
  }

  function onSelectCountry(country) {
    setIsOptionsVisible(false);
    setSelectedCountry(country);
  }

  function getMyCountryCode() {
    console.log("checking.....");
    return "IN";
  }

  return (
    <CustomPressable onPress={showCountryOptions}>
      <View style={styles.container}>
        <View style={styles.flagContainer}>
          <Image
            source={
              selectedCountry
                ? selectedCountry.flag
                : require("../../assets/images/countryflags/png/in.png")
            }
            style={styles.flag}
          ></Image>
        </View>
        <DropDown
          data={GlobalCountries.list}
          selectedKey={getMyCountryCode()}
          isOptionsVisible={isOptionsVisible}
          onSelectItem={onSelectCountry}
        />
      </View>
    </CustomPressable>
  );
}

export default CountryDropDown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalColors.input.textBGColor,
    borderColor: GlobalColors.input.borderColor,
    borderWidth: GlobalSizes.input.borderWidth,
    borderRadius: GlobalSizes.input.borderRadius,
    padding: 2,
  },

  flagContainer: {
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 8,
  },

  flag: {
    alignSelf: "center",
    height: 24,
    width: 24,
  },
});
