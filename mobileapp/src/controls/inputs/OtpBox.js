import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";

function OtpBox({ index, onPress, otpBoxRef, nextOtpBoxRef }) {
  function onChangeNumber(newInput, index, otpBoxRef) {
    onPress(newInput, index, otpBoxRef);
  }

  return (
    <TextInput
      style={styles.otpBox}
      maxLength={1}
      ref={otpBoxRef}
      keyboardType="numeric"
      onChangeText={(text) => onChangeNumber(text, index, nextOtpBoxRef)}
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
  },
});
