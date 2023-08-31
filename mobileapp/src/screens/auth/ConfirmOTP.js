import { StyleSheet, View, StatusBar } from "react-native";
import { useContext, useState } from "react";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import OtpBoxes from "../../controls/inputs/OtpBoxes";
import { AuthContext } from "../../store/AuthContextProvider";
import { getLangObject } from "../../utils/LanguageUtil";
import AuthService from "../../services/AuthService";
import LogoLayout from "../../controls/layout/LogoLayout";
import StandardButton from "../../controls/buttons/StandardButton";

function ConfirmOTP({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [otp, setOtp] = useState(null);

  const authCtx = useContext(AuthContext);
  const { isSignup, loginId } = route.params;

  function setUserData(data) {
    authCtx.authenticate(data.jwtAuthenticationResponse.token);
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    const requestData = {
      mobileNumber: loginId,
      otp: otp,
      referralCode: null,
    };
    doSignupOrSignIn(requestData)
      .then((response) => {
        setIsLoading(false);
        setUserData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        let newError = { otp: error.message.description };
        setErrors({ ...errors, ...newError });
      });
  }

  function doSignupOrSignIn(requestData) {
    if (isSignup) {
      return AuthService.doSignupByMobileNumber(requestData);
    } else {
      return AuthService.doSigninByMobile(requestData);
    }
  }

  function onOTPChange(text) {
    setOtp(text);
  }

  return (
    <LogoLayout isLoading={isLoading}>
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <StatusBar hidden={true} />
          <ScreenHeaderText headerLevel={2}>
            {getLangObject().AuthConfirmOTP.screenHeader}
          </ScreenHeaderText>
          <View style={styles.description}>
            <ScreenHeaderText headerLevel={4}>
              {getLangObject().AuthConfirmOTP.screenDescription}
            </ScreenHeaderText>
          </View>

          <View style={styles.otp}>
            <OtpBoxes onOTPChange={onOTPChange} error={errors.otp} />
          </View>

          <View style={styles.btnContainer}>
            <StandardButton onPress={submitHandler}>Submit</StandardButton>
          </View>
        </View>
      </View>
    </LogoLayout>
  );
}

export default ConfirmOTP;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  formContainer: {
    width: "100%",
    alignItems: "flex-start",
  },

  description: {
    marginTop: 10,
  },

  otp: {
    marginTop: 16,
    width: "100%",
  },

  btnContainer: {
    marginTop: 24,
    alignSelf: "flex-end",
  },
});
