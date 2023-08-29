import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import RoundedButton from "../../controls/buttons/RoundedButton";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";
import StandardInput from "../../controls/inputs/StandardInput";
import LogoBackgroundA from "../../controls/layout/LogoBackgroundA";
import LogoLayout from "../../controls/layout/LogoLayout";
import NormalText from "../../controls/texts/NormalText";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import AuthService from "../../services/AuthService";
import { getLangObject } from "../../utils/LanguageUtil";
import TextLink from "../../views/TextLink";
import { TextInput } from "react-native-paper";
import StandardButton from "../../controls/buttons/StandardButton";

const screen = Dimensions.get("screen");

function SignupPasswordAndOTP({ route, navigation }) {
  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [keyBoardVisible, setKeyBoardVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [errors, setErrors] = useState([]);

  //const { isSignup } = route.params;
  const isSignup = true;

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
      isInputEmail: !isMobile,
      emailOrMobileNumber: loginId,
    };
    doSignInOrSignup(requestData)
      .then((response) => {
        console.log(response);
        setSuccessStatus("", true, false);
        if (isSignup) {
          if (requestData.isInputEmail) {
            navigation.navigate("SignupPasswordAndOTP", {
              isSignup: true,
              loginId: loginId,
            });
          } else {
            navigation.navigate("ConfirmOTP", {
              isSignup: true,
              loginId: loginId,
            });
          }
        } else {
          if (requestData.isInputEmail) {
            navigation.navigate("LoginByPassword", {
              isSignup: false,
              loginId: loginId,
            });
          } else {
            navigation.navigate("ConfirmOTP", {
              isSignup: false,
              loginId: loginId,
            });
          }
        }
      })
      .catch((error) => {
        setSuccessStatus("", false, false);
        let newError = { phoneOrEmail: error.message.description };
        setErrors({ ...errors, ...newError });
      });
  }

  function doSignInOrSignup(requestData) {
    if (isSignup) {
      return AuthService.doSignupGenerateOTP(requestData);
    } else {
      return AuthService.doSigninGenerateOTP(requestData);
    }
  }

  function setSuccessStatus(message, successful, loading) {
    setSuccessful(successful);
    setIsLoading(loading);
  }

  function inputChangeHandler(text) {
    let newError = { phoneOrEmail: "" };
    //setMyArray(oldArray => [...oldArray, newElement]);
    setErrors({ ...errors, ...newError });
    setLoginId(text);
  }

  function inputTypeChange() {
    setIsMobile(!isMobile);
  }

  const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
    setKeyBoardVisible(true);
  });
  const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
    setKeyBoardVisible(false);
  });

  return (
    <LogoLayout isLoading={isLoading} logoVisible={!keyBoardVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.mainContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <View style={styles.formContainer}>
              <ScreenHeaderText headerLevel={4}>
                {getLangObject().AuthSignupPasswordAndOTP.screenHeader}
              </ScreenHeaderText>

              <StandardInput
                label="Enter Password"
                viewStyle={{ marginTop: 8, width: "100%" }}
              />

              <StandardInput
                label="Confirm Password"
                viewStyle={{ marginTop: 8, width: "100%" }}
              />

              <StandardInput
                label="OTP"
                viewStyle={{ marginTop: 8, width: "100%" }}
              />
              <View style={styles.btnContainer}>
                <StandardButton>Submit</StandardButton>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LogoLayout>
  );
}

export default SignupPasswordAndOTP;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  formContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 16,
  },
  btnContainer: {
    marginTop: 24,
    alignSelf: "flex-end",
  },
});
