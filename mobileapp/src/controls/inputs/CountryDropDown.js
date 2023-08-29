import { View, StyleSheet, Image, Text } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalCountries } from "../../common/countries";
import DropDown from "./DropDown";
import { GlobalSizes } from "../../common/sizes";
import CustomPressable from "../commons/CustomPressable";
import { useState } from "react";

function CountryDropDown({ onCountrySelected }) {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  function showCountryOptions() {
    setIsOptionsVisible(true);
  }

  function changeCountryHandler(country) {
    setIsOptionsVisible(false);
    setSelectedCountry(country);
    onCountrySelected(country);
  }

  function getMyCountryCode() {
    let defaultCountry = "IN";
    let vSelectedItem = GlobalCountries.list.find(
      (item) => item.key === defaultCountry
    );
    onCountrySelected(vSelectedItem);
    return defaultCountry;
  }

  function CountryRenderItem({ item, index }) {
    return (
      <View style={styles.optionItem}>
        <View style={styles.subOptionItem}>
          <Image source={item.flag} style={styles.flagIcon}></Image>
          <Text style={styles.countryName}> {item.name}</Text>
        </View>
        <Text style={styles.value}> {item.value}</Text>
      </View>
    );
  }

  return (
    <CustomPressable onPress={showCountryOptions}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
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
          <View style={styles.dropDownContainer}>
            <DropDown
              data={GlobalCountries.list}
              selectedKey={getMyCountryCode()}
              isOptionsVisible={isOptionsVisible}
              onSelectItem={changeCountryHandler}
              RenderView={CountryRenderItem}
            />
          </View>
        </View>
      </View>
    </CustomPressable>
  );
}

export default CountryDropDown;

const styles = StyleSheet.create({
  outerContainer: {
    marginRight: 8,
    height: 50,
    marginTop: 6,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: GlobalColors.input.textBGColor,
    borderColor: GlobalColors.input.borderColor,
    borderWidth: GlobalSizes.input.borderWidth,
    borderRadius: GlobalSizes.input.borderRadius,
    padding: 2,
    height: "100%",
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

  dropDownContainer: {
    alignSelf: "center",
  },
});
