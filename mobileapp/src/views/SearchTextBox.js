import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchIcon from "../controls/searchBar/SearchIcon";
import SearchText from "../controls/searchBar/SearchText";
import { GlobalSizes } from "../common/sizes";
const SearchTextBox = ({ children, onPress }) => {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon onPress={onPress} />
      <SearchText />
    </View>
  );
};

export default SearchTextBox;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: GlobalSizes.searchText.borderWidth,
    borderRadius: GlobalSizes.searchText.borderRadius,
    marginVertical: GlobalSizes.searchText.marginVertical,
    height: GlobalSizes.searchText.height,
  },
});
