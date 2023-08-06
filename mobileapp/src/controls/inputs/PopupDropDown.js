import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomPressable from "../commons/CustomPressable";
import DropDownList from "./DropDownList";

function PopupDropDown({ data }) {
  const [optionListIsVisible, setOptionListIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function showOptions() {
    setOptionListIsVisible(true);
  }

  function stopShowingOptions() {
    setOptionListIsVisible(false);
  }

  function onSelectItem(item) {
    console.log(item);
  }

  return (
    <CustomPressable onPress={showOptions}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/countryflags/png/in.png")}
          style={styles.flag}
        ></Image>
        <Text style={styles.text}>+911</Text>
        <View style={styles.downArrow}>
          <Ionicons name="chevron-down" size={15} />
        </View>
      </View>
      <DropDownList
        data={data}
        isVisible={optionListIsVisible}
        onBackPress={stopShowingOptions}
        onSelectItem={onSelectItem}
      ></DropDownList>
    </CustomPressable>
  );
}

export default PopupDropDown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  downArrow: {
    justifyContent: "flex-end",
  },
  flag: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  text: {
    marginLeft: 8,
    marginRight: 5,
  },
});
