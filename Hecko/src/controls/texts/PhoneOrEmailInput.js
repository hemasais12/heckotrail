import { Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import {
  adjustHeight,
  adjustPadding,
  adjustWidth,
} from "../../common/AdjustSize";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function PhoneOrEmailInput({ children }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        onPressIn={() => {}}
        placeholder="text"
      />
    </View>
  );
}

export default PhoneOrEmailInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderColor: GlobalColors.input.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  inputText: {
    width: "100%",
  },
});
