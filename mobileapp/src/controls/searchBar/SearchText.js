import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalSizes } from "../../common/sizes";

function SearchText() {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        onPressIn={() => {}}
        placeholder="Search for Brand/Number/Owner Name"
      />
    </View>
  );
}

export default SearchText;

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    marginRight: GlobalSizes.searchText.marginRight,
    borderRadius: GlobalSizes.searchText.borderRadius,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: GlobalSizes.searchText.paddingHorizontal,
  },
});
