import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import DropDownList from "./DropDownList";
import { GlobalCountries } from "../../common/countries";
import { useEffect } from "react";
import CustomPressable from "../commons/CustomPressable";

function DropDown({
  data,
  onSelectItem,
  selectedKey,
  isOptionsVisible,
  renderView,
}) {
  const [optionListIsVisible, setOptionListIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  function showOptions() {
    setOptionListIsVisible(true);
  }

  function stopShowingOptions() {
    setOptionListIsVisible(false);
  }

  function itemSelectionHandler(item) {
    setSelectedItem(item);
    onSelectItem(item);
  }

  useEffect(() => {
    let vSelectedItem = data.find((item) => item.key === selectedKey);
    setSelectedItem(vSelectedItem);
  }, []);

  useEffect(() => {
    setOptionListIsVisible(isOptionsVisible);
  }, [isOptionsVisible]);

  return (
    <CustomPressable onPress={showOptions}>
      <View style={styles.container}>
        <View style={styles.countryCode}>
          <Text>{selectedItem?.value}</Text>
        </View>
        <View style={styles.downArrow}>
          <Ionicons name="chevron-down" size={15} />
        </View>
        <DropDownList
          data={data}
          isVisible={optionListIsVisible}
          onBackPress={stopShowingOptions}
          onSelectItem={itemSelectionHandler}
          renderView={renderView}
        ></DropDownList>
      </View>
    </CustomPressable>
  );
}

export default DropDown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: GlobalColors.input.textBGColor,
    padding: 4,
  },
  downArrow: {
    justifyContent: "center",
  },

  countryCode: {
    marginLeft: 16,
    marginRight: 4,
    justifyContent: "center",
  },
});
