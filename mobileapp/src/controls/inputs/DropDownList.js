import { StyleSheet, Text, View, Image, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import CustomPressable from "../commons/CustomPressable";
import SearchTextBox from "../../views/SearchTextBox";
import { GlobalColors } from "../../common/colors";

function DropDownList({
  data,
  isVisible,
  renderView,
  onBackPress,
  onSelectItem,
}) {
  const [originalData, setOriginalData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);

  function selectItem(item) {
    if (onSelectItem) onSelectItem(item);
    goBack();
  }

  function defaultRenderItem({ item, index }) {
    return (
      <CustomPressable
        onPress={() => {
          selectItem(item);
        }}
      >
        <View style={styles.optionItem}>
          <Image source={item.flag} style={styles.flagIcon}></Image>
          <Text style={styles.countryName}> {item.name}</Text>
          <Text style={styles.dialCode}> {item.dialCode}</Text>
        </View>
      </CustomPressable>
    );
  }

  function filterList(searchText) {
    if (searchText && searchText !== "") {
      var newList = originalData.filter(function (countryObj) {
        return (
          countryObj.name.toLowerCase().indexOf(searchText.toLowerCase()) >
            -1 ||
          countryObj.dialCode.indexOf(searchText) > -1 ||
          countryObj.isoCode.toLowerCase().indexOf(searchText.toLowerCase()) >
            -1
        );
      });
      setFilteredData(newList);
    } else {
      setFilteredData(originalData);
    }
  }

  function goBack() {
    console.log("trying to go back");
    isVisible = false;
    if (onBackPress) onBackPress();
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.topPart}>
          <Ionicons name="arrow-back" size={20} onPress={goBack} />
          <View style={styles.searchTextBox}>
            <SearchTextBox
              onPress={filterList}
              placeholder="search with country name or dial code"
              searchTextHandler={filterList}
            />
          </View>
        </View>

        <FlatList
          data={filteredData}
          renderItem={renderView ? renderView : defaultRenderItem}
          alwaysBounceVertical={true}
        />
      </View>
    </Modal>
  );
}

export default DropDownList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  searchTextBox: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 8,
  },
  optionItem: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 8,
  },
  flagIcon: {
    width: 25,
    height: 25,
  },

  countryName: {
    marginLeft: 12,
    marginRight: 6,
  },

  dialCode: {
    color: GlobalColors.page.textColor,
  },
});
