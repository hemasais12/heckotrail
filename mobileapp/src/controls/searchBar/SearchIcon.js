import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import { Feather } from "@expo/vector-icons";
import CustomerPressable from "../commons/CustomPressable";

function SearchIcon({ children, onPress }) {
  return (
    <View style={styles.searchIcon}>
      <CustomerPressable onPress={onPress}>
        <Feather name="search" size={24} />
      </CustomerPressable>
    </View>
  );
}

export default SearchIcon;

const styles = StyleSheet.create({
  searchIcon: {
    marginHorizontal: GlobalSizes.searchText.marginHorizontal,
    marginVertical: GlobalSizes.searchText.marginVertical,
  },
});
