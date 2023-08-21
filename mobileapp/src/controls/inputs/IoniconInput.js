import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalColors } from "../../common/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

function IoniconInput({ ioniconprops, ioniconType, inputprops, isInvalid }) {
  function prepareIonicon() {
    switch (ioniconType) {
      case "Ionicons":
        return (
          <Ionicons
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
      case "AntDesign":
        return (
          <AntDesign
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
        break;
      case "FontAwesome":
        return (
          <FontAwesome
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
        break;
      case "EvilIcons":
        return (
          <EvilIcons
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
        break;
      case "MaterialIcons":
        return (
          <MaterialIcons
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
        break;
      case "Entypo":
        return (
          <Entypo
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
        break;
      default:
        return (
          <Ionicons
            {...ioniconprops}
            size={20}
            color={GlobalColors.icons.color}
          />
        );
    }
  }

  return (
    <View style={styles.inputContainer}>
      {prepareIonicon()}
      <TextInput
        {...inputprops}
        style={[styles.input, isInvalid && styles.invalid]}
      />
    </View>
  );
}

export default IoniconInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  label: {},
  invalid: {},
  input: {
    flex: 1,
    marginLeft: 8,
    borderBottomColor: GlobalColors.input.borderColor,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
});
