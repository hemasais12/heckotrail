import { View, StyleSheet, Image, Text } from "react-native";
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

  function changeCountryHandler(country) {
    setIsOptionsVisible(false);
    setSelectedCountry(country);
  }

  function getMyCountryCode() {
    return "IN";
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
          onSelectItem={changeCountryHandler}
          RenderView={CountryRenderItem}
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

  optionItem: {
    flexDirection: "row",
    justifyContent:"space-between",
    flex: 1,
    marginBottom: 18,
    borderBottomWidth:0.2,
  },
  subOptionItem:{
    flexDirection: "row",
  },
  countryName: {
    marginLeft: 12,
    marginRight: 6,
  },

  value: {
    color: GlobalColors.page.textColor,
    paddingRight:13,
  },
  flagIcon: {
    width: 25,
    height: 25,
    marginTop:-2,
    resizeMode:"contain",
  },
});
