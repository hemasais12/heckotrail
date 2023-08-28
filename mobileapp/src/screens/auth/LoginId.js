import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Text,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import RoundedButton from "../../controls/buttons/RoundedButton";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";
import LogoBackground from "../../controls/layout/LogoBackground";
import NormalText from "../../controls/texts/NormalText";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import AuthService from "../../services/AuthService";
import TextLink from "../../views/TextLink";

const screen = Dimensions.get("screen");

function LoginId({ route, navigation }) {
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginId, setLoginId] = useState("");

  let isSignup = route.params ? route.params.isSignup : false;

  function signInUpLinkClickHandler() {
    if (!isSignup) {
      navigation.replace("LoginId", {
        isSignup: true,
      });
    } else {
      navigation.replace("LoginId", {
        isSignup: false,
      });
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (isLoading) return;

    setSuccessStatus("", false, true);

    const requestData = {
      emailOrMobileNumber: loginId,
    };
    AuthService.doSignupGenerateOTP(requestData)
      .then((response) => {
        console.log(response);
        setSuccessStatus("", true, false);
        navigation.navigate("ConfirmOTP", {
          isSignup: isSignup,
          loginId: loginId,
        });
      })
      .catch((error) => {
        console.log(error);
        setSuccessStatus(error.message, false, false);
      });
  }

  function setSuccessStatus(message, successful, loading) {
    setMessage(message);
    setSuccessful(successful);
    setIsLoading(loading);
  }

  function inputChangeHandler(text) {
    setLoginId(text);
  }

  return (
    <LogoBackground isLoading={isLoading}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.pagecontainer}>
          <View style={styles.headers}>
            <ScreenHeaderText headerLevel={3}>
              Expert Services at your tips
            </ScreenHeaderText>
            <ScreenHeaderText headerLevel={5}>
              Affordable as No commission
            </ScreenHeaderText>
            <NormalText>{"Search   •   Review   •   Use"}</NormalText>
          </View>

          <View style={styles.inputs}>
            <ScreenHeaderText>
              {isSignup ? "Sign up" : "Sign In"}
            </ScreenHeaderText>
            <NormalText>Please enter mobile number or email:</NormalText>

            <PhoneOrEmailInput
              onChangeText={inputChangeHandler}
              viewStyle={{ marginTop: 16 }}
            />

            <RoundedButton
              onPress={submitHandler}
              viewStyle={{ marginTop: 24, alignSelf: "flex-end" }}
              isLoading={isLoading}
            >
              {isSignup ? "Sign up" : "Sign In"}
            </RoundedButton>
          </View>
        </View>
        <View style={styles.link}>
          <TextLink
            linkText={isSignup ? "Sign In" : "Sign Up"}
            onLinkClick={signInUpLinkClickHandler}
          >
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </TextLink>
        </View>
      </KeyboardAvoidingView>
    </LogoBackground>
  );
}

export default LoginId;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  pagecontainer: {
    flex: 1,
    justifyContent: "center",
  },

  headers: {
    alignItems: "center",
  },

  inputs: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 36,
  },

  link: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 16,
    flexDirection: "row",
    width: "100%",
  },
});
