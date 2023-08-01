import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import {Feather} from '@expo/vector-icons';

const SearchIcon = ({ children, onPress }) => {
  return (
    <View style={styles.searchIcon}>
      <TouchableOpacity onPress={onPress}>
        <Feather name='search' size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchIcon

const styles = StyleSheet.create({
      searchIcon:{
        marginHorizontal:GlobalSizes.searchText.marginHorizontal,
        marginVertical:GlobalSizes.searchText.marginVertical,
      }
})