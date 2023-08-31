import { useEffect, useState } from "react";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import ErrorText from "../texts/ErrorText";

function StandardInput(props) {
  const [label, setLabel] = useState(props.label);
  const [currentLabel, setCurrentLabel] = useState("");
  const [placeholder, setPlaceholder] = useState(props.placeholder);

  useEffect(() => {
    setLabel(props.label);
    setPlaceholder(props.placeholder);
  }, [props]);

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
        placeholderTextColor={GlobalColors.input.placeHolderColor}
        label={currentLabel}
        placeholder={placeholder}
        onChange={changeHandler}
        onEndEditing={changeHandler}
        onFocus={focusHandler}
        style={[styles.input, props.inputStyle]}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </View>
  );
}

export default StandardInput;

const styles = StyleSheet.create({
  container: {},
  input: {},
});
