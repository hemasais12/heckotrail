import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalSizes } from "../../common/sizes";
import { useState } from "react";

function SearchText({ placeholder, searchTextHandler }) {
  const [text, setText] = useState("");

  function onSearchTextChange(newText) {
    setText(newText);
    if (searchTextHandler) searchTextHandler(newText);
  }

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        onPressIn={() => {}}
        placeholder={placeholder}
        onChangeText={(newText) => onSearchTextChange(newText)}
        defaultValue={text}
      />
    </View>
  );
}

export default SearchText;

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    borderRadius: GlobalSizes.searchText.borderRadius,
    justifyContent: "center",
  },
  searchInput: {
    padding: GlobalSizes.searchText.padding,
  },
});
