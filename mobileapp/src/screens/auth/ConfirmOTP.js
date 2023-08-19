import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import { useState, useEffect, useRef } from "react";
import { ScreenTextEn } from "../../common/screentexten";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import OtpBoxes from "../../controls/inputs/OtpBoxes";

function ConfirmOTP({ navigation, route }) {
  const otpBoxRef2 = useRef();
  const otpBoxRef3 = useRef();
  const otpBoxRef4 = useRef();

  function onSubmit() {
    navigation.goBack();
  }

  function onChangeNumber(newInput, isLastBox, nextOtpBoxRef) {
    console.log(newInput);
    if (!isLastBox && newInput.length === 1) {
      nextOtpBoxRef.current.focus();
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.mainContainer}>
        <StatusBar hidden={false} />
        <ScreenHeaderText headerLevel={2}>
          {ScreenTextEn.AuthConfirmOTP.screenHeader}
        </ScreenHeaderText>
        <View style={styles.description}>
          <ScreenHeaderText headerLevel={4}>
            {ScreenTextEn.AuthConfirmOTP.screenDescription}
          </ScreenHeaderText>
        </View>

        <OtpBoxes />

        <View style={styles.submitButton}>
          <Button title="Back" onPress={onSubmit}></Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ConfirmOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
  },
  description: {
    marginTop: 10,
  },

  submitButton: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
