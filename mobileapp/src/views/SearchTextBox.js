import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchIcon from "../controls/searchBar/SearchIcon";
import SearchText from "../controls/searchBar/SearchText";
import { GlobalSizes } from "../common/sizes";
import { GlobalColors } from "../common/colors";

function SearchTextBox({ children, onPress, placeholder, searchTextHandler }) {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon onPress={onPress} />
      <SearchText
        placeholder={placeholder}
        searchTextHandler={searchTextHandler}
      />
    </View>
  );
}

export default SearchTextBox;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: GlobalSizes.searchText.borderWidth,
    borderRadius: GlobalSizes.searchText.borderRadius,
    borderColor: GlobalColors.search.borderColor,
  },
});
