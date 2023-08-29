import { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import StandardInput from "../../controls/inputs/StandardInput";
import LogoLayout from "../../controls/layout/LogoLayout";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import AuthService from "../../services/AuthService";
import { getLangObject } from "../../utils/LanguageUtil";
import StandardButton from "../../controls/buttons/StandardButton";
import {
  OTP_EXPIRED_OR_WRONG,
  PASSWORD_NOT_MATCHING,
} from "../../common/errorkeys";
import Errors from "../components/errors";
import { PASSWORD_MIN_LENGTH } from "../../common/constants";
import {
  validateConfirmPassword,
  validateOTP,
  validatePassword,
} from "../../utils/ValidateFormUtil";

function SignupPasswordAndOTP({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [referralCode, setReferralCode] = useState(null);

  const { loginId } = route.params;

  function isFormValid() {
    let validator = { isValid: true, errors: {} };
    validatePassword(password, validator);
    validateConfirmPassword(password, confirmPassword, validator);
    validateOTP(otp, validator);
    setErrors(validator.errors);
    return validator.isValid;
  }

  function formFieldChangeHandler(newText, setHandler) {
    setErrors([]);
    setHandler(newText);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!isFormValid()) return;

    setIsLoading(true);

    const requestData = {
      email: loginId,
      password: password,
      confirmPassword: confirmPassword,
      otp: otp,
      referralCode: referralCode,
    };
    console.log(requestData);
    AuthService.doSignupByEmail(requestData)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        authCtx.authenticate(response.data.jwtAuthenticationResponse.token);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        let newError = {};
        if (error.message.messageKey === OTP_EXPIRED_OR_WRONG)
          newError = { otp: error.message.description };
        else if (error.message.messageKey === PASSWORD_NOT_MATCHING)
          newError = { confirmPassword: error.message.description };
        else newError = { general: error.message.description };
        setErrors({ ...errors, ...newError });
      });
  }

  return (
    <LogoLayout isLoading={isLoading}>
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <ScreenHeaderText headerLevel={4}>
            {getLangObject().AuthSignupPasswordAndOTP.screenHeader}
          </ScreenHeaderText>

          <StandardInput
            label="Enter Password"
            keyboardType="default"
            viewStyle={{ marginTop: 8, width: "100%" }}
            onChangeText={(text) => formFieldChangeHandler(text, setPassword)}
            error={errors.password}
          />
          <StandardInput
            label="Confirm Password"
            keyboardType="default"
            viewStyle={{ marginTop: 8, width: "100%" }}
            onChangeText={(text) =>
              formFieldChangeHandler(text, setConfirmPassword)
            }
            error={errors.confirmPassword}
          />
          <StandardInput
            label="OTP"
            keyboardType="number-pad"
            viewStyle={{ marginTop: 8, width: "100%" }}
            onChangeText={(text) => formFieldChangeHandler(text, setOtp)}
            error={errors.otp}
          />
          <View style={styles.btnContainer}>
            <StandardButton onPress={submitHandler}>Submit</StandardButton>
          </View>
          <Errors error={errors.general} />
        </View>
      </View>
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
