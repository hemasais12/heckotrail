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
import { OTP_LENGTH } from "../../common/constants";

function ConfirmOTP({ navigation, route }) {
  const { isSignup } = route.params;

  function moveToSignUpAsScreen() {
    navigation.navigate("SelectRole", { isSignup: isSignup });
  }

  function moveToSignInAsScreen() {
    navigation.navigate("SelectRole", { isSignup: isSignup });
  }

  function submitHandler(otp) {
    if (isSignup) moveToSignUpAsScreen();
    else moveToSignInAsScreen();
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

        <OtpBoxes
          onSubmit={submitHandler}
          errorText={ScreenTextEn.AuthConfirmOTP.errorLength}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default ConfirmOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
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
