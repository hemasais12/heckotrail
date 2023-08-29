import { useState } from "react";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { GlobalColors } from "../../common/colors";

function StandardInput(props) {
  return (
    <View style={[styles.container, props.viewStyle]}>
      <TextInput
        mode="outlined"
        outlineColor={GlobalColors.input.borderColor}
        activeOutlineColor={GlobalColors.input.activeBorderColor}
        {...props}
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
    color: GlobalColors.app.error,
  },
});
