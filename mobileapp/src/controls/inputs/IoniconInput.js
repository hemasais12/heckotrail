import { View, Text, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalColors } from "../../common/colors";

function IoniconInput({ ioniconprops, inputprops, isInvalid }) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons {...ioniconprops} color={GlobalColors.icons.color} />

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
  },
  label: {},
  invalid: {},
});
