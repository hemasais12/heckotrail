import { useState } from "react";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function StandardInput(props) {
  const [label, setLabel] = useState(props.label);
  const [currentLabel, setCurrentLabel] = useState("");
  const [placeholder, setPlaceholder] = useState(props.placeholder);

  function changeHandler(event) {
    if (event.nativeEvent.text && event.nativeEvent.text.length > 0)
      setCurrentLabel(label);
    else setCurrentLabel("");
  }

  function focusHandler(event) {
    setCurrentLabel(label);
  }

  return (
    <View style={[styles.container, props.viewStyle]}>
      <TextInput
        {...props}
        mode="outlined"
        outlineColor={GlobalColors.input.borderColor}
        activeOutlineColor={GlobalColors.input.activeBorderColor}
        label={currentLabel}
        placeholder={placeholder}
        placeholderTextColor={GlobalColors.input.placeHolderColor}
        onChange={changeHandler}
        onEndEditing={changeHandler}
        onFocus={focusHandler}
        style={[styles.input, props.inputStyle]}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
}

export default StandardInput;

const styles = StyleSheet.create({
  container: {},
  input: {},
  error: {
    color: GlobalColors.input.textErrorColor,
    fontSize: GlobalSizes.input.errorFontSize,
  },
});
