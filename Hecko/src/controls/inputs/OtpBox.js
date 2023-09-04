import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { GlobalColors } from "../../common/colors";

function OtpBox({ index, otpChangeHandler, inputRef }) {
  return (
    <TextInput
      key={index}
      test={index}
      style={styles.otpBox}
      maxLength={1}
      keyboardType="numeric"
      ref={inputRef}
      onChangeText={(text) => otpChangeHandler(index, text)}
    />
  );
}

export default OtpBox;

const styles = StyleSheet.create({
  otpBox: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 8,
    minWidth: 50,
    borderColor: GlobalColors.app.borderColor,
  },
});
