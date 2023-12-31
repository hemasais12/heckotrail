import { useState } from "react";
import { StyleSheet, View, Dimensions, Keyboard } from "react-native";
import { TECHNICAL_ISSUE } from "../../common/errorkeys";
import RoundedButton from "../../controls/buttons/RoundedButton";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";
import LogoLayout from "../../controls/layout/LogoLayout";
import NormalText from "../../controls/texts/NormalText";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import AuthService from "../../services/AuthService";
import TextLink from "../../views/TextLink";
import Errors from "../components/errors";
import { USERNAME_PREFIX } from "../../common/constants";

const screen = Dimensions.get("screen");

function LoginId({ route, navigation }) {
  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [keyBoardVisible, setKeyBoardVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(
    route.params ? route.params.isMobile : true
  );
  const [errors, setErrors] = useState([]);

  const { isSignup } = route.params;
  function signInUpLinkClickHandler() {
    if (!isSignup) {
      navigation.replace("LoginId", {
        isSignup: true,
        isMobile: isMobile,
      });
    } else {
      navigation.replace("LoginId", {
        isSignup: false,
        isMobile: isMobile,
      });
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (isLoading) return;

    setSuccessStatus("", false, true);

    const requestData = {
      isInputEmail: !isMobile,
      emailOrMobileNumber: USERNAME_PREFIX + loginId,
    };
    doSignInOrSignup(requestData)
      .then((response) => {
        setSuccessStatus("", true, false);
        if (isSignup) {
          if (requestData.isInputEmail) {
            navigation.navigate("SignupPasswordAndOTP", {
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
        let newError = {};
        if (error.message.messageKey === TECHNICAL_ISSUE)
          newError = { general: error.message.description };
        else newError = { phoneOrEmail: error.message.description };
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
    //setMyArray(oldArray => [...oldArray, newElement]);
    setErrors([]);
    setLoginId(text);
  }

  function inputTypeChange() {
    setIsMobile(!isMobile);
  }

  return (
    <LogoLayout isLoading={isLoading}>
      <View style={styles.innerContainer}>
        <ScreenHeaderText headerLevel={3}>
          Expert Services at your tips
        </ScreenHeaderText>
        <ScreenHeaderText headerLevel={5} style={{ marginVertical: 4 }}>
          Affordable as No commission
        </ScreenHeaderText>
        <NormalText>{"Search   •   Review   •   Use"}</NormalText>
        <View style={styles.formContainer}>
          <ScreenHeaderText>
            {isSignup ? "Sign up" : "Sign In"}
          </ScreenHeaderText>
          <NormalText>
            Please enter {isMobile ? "mobile number" : "email"}:
          </NormalText>
          <PhoneOrEmailInput
            onChangeText={inputChangeHandler}
            isMobileView={isMobile}
            error={errors.phoneOrEmail}
          />

          <RoundedButton
            onPress={submitHandler}
            viewStyle={{ marginTop: 24, alignSelf: "flex-end" }}
            isLoading={isLoading}
          >
            {isSignup ? "Sign up" : "Sign In"}
          </RoundedButton>

          <View style={styles.linkContainer1}>
            <TextLink
              linkText={isMobile ? "Email" : "Mobile"}
              onLinkClick={inputTypeChange}
            >
              {isSignup ? "OR sign up using" : "OR sign in using"}
            </TextLink>
          </View>
          <View style={styles.linkContainer2}>
            <TextLink
              linkText={isSignup ? "Sign In" : "Sign Up"}
              onLinkClick={signInUpLinkClickHandler}
            >
              {isSignup ? "Already have an account?" : "Don't have an account?"}
            </TextLink>
          </View>
          <Errors error={errors.general} />
        </View>
      </View>
    </LogoLayout>
  );
}

export default LoginId;

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
    alignItems: "flex-start",
    marginTop: 16,
    width: "100%",
  },
  linkContainer1: {
    alignItems: "center",
    marginTop: 24,
    alignSelf: "center",
  },
  linkContainer2: {
    alignItems: "center",
    marginTop: 12,
    alignSelf: "center",
  },
});
