import {
  StyleSheet,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useContext } from "react";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import OtpBoxes from "../../controls/inputs/OtpBoxes";
import { AuthContext } from "../../store/AuthContextProvider";
import LogoBackground from "../../controls/layout/LogoBackground";
import { getLangObject } from "../../utils/LanguageUtil";

function ConfirmOTP({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const { isSignup } = route.params;

  function moveToSignUpAsScreen() {
    authCtx.authenticate("token");
  }

  function moveToSignInAsScreen() {
    authCtx.authenticate("token");
  }

  function submitHandler(otp) {
    if (isSignup) moveToSignUpAsScreen();
    else moveToSignInAsScreen();
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
