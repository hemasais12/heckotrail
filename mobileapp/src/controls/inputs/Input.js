import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeHolder,
  error,
}) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <View style={styles.inputContainer}>
      {label ? (
        <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
          {label}
        </Text>
      ) : (
        ""
      )}

      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        placeholder={placeHolder}
      />
      {error && <Text style={styles.errorStyle}>{error}</Text>}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  label: {
    color: GlobalColors.input.labelColor,
    marginBottom: 4,
  },
  labelInvalid: {
    color: GlobalColors.input.labelErrorColor,
  },

  errorStyle: {
    marginTop: 4,
    color: GlobalColors.input.labelErrorColor,
  },

  input: {
    backgroundColor: GlobalColors.input.textBGColor,
    borderRadius: GlobalSizes.input.borderRadius,
    borderColor: GlobalColors.input.borderColor,
    borderWidth: 1,
    paddingHorizontal: 8,
    height: "100%",
  },
  inputInvalid: {
    backgroundColor: GlobalColors.input.textErrorBGColor,
  },
});
