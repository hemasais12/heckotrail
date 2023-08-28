import {
  StyleSheet,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useContext, useState } from "react";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import OtpBoxes from "../../controls/inputs/OtpBoxes";
import { AuthContext } from "../../store/AuthContextProvider";
import LogoBackground from "../../controls/layout/LogoBackground";
import { getLangObject } from "../../utils/LanguageUtil";
import AuthService from "../../services/AuthService";

function ConfirmOTP({ navigation, route }) {
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const { isSignup, loginId } = route.params;

  function setSuccessStatus(message, successful, loading) {
    setMessage(message);
    setSuccessful(successful);
    setIsLoading(loading);
  }

  function setUserData(data) {
    authCtx.authenticate(data.jwtAuthenticationResponse.token);
  }

  function submitHandler(event, otp) {
    event.preventDefault();
    setSuccessStatus("", false, true);

    const requestData = {
      mobileNumber: loginId,
      otp: otp,
      referralCode: null,
    };
    AuthService.doSignupByMobileNumber(requestData)
      .then((response) => {
        console.log();
        setSuccessStatus("", true, false);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setSuccessStatus(error.message, false, false);
      });
  }

  return (
    <LogoBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.topcontainer}></View>
        <View style={styles.middlecontainer}>
          <StatusBar hidden={true} />
          <ScreenHeaderText headerLevel={2}>
            {getLangObject().AuthConfirmOTP.screenHeader}
          </ScreenHeaderText>
          <View style={styles.description}>
            <ScreenHeaderText headerLevel={4}>
              {getLangObject().AuthConfirmOTP.screenDescription}
            </ScreenHeaderText>
          </View>

          <OtpBoxes
            onSubmit={submitHandler}
            errorText={getLangObject().AuthConfirmOTP.errorLength}
          />
        </View>
      </KeyboardAvoidingView>
    </LogoBackground>
  );
}

export default ConfirmOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topcontainer: {
    flex: 1,
  },
  middlecontainer: {
    flex: 2,
    alignItems: "center",
  },

  description: {
    marginTop: 10,
  },
});
