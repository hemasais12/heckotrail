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
import StandardInput from "../../controls/inputs/StandardInput";
import LogoLayout from "../../controls/layout/LogoLayout";
import StandardButton from "../../controls/buttons/StandardButton";
import Errors from "../components/errors";
import { validatePassword } from "../../utils/ValidateFormUtil";

function LoginByPassword({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState(null);

  const authCtx = useContext(AuthContext);
  const { loginId } = route.params;

  function isFormValid() {
    let validator = { isValid: true, errors: {} };
    validatePassword(password, validator);
    setErrors(validator.errors);
    return validator.isValid;
  }

  function setUserData(data) {
    authCtx.authenticate(data.jwtAuthenticationResponse.token);
  }

  function formFieldChangeHandler(newText, setHandler) {
    setErrors([]);
    setHandler(newText);
  }

  function submitHandler(event, otp) {
    event.preventDefault();

    if (!isFormValid()) return;

    setIsLoading(true);

    const requestData = {
      email: loginId,
      password: password,
    };
    AuthService.doSigninByEmail(requestData)
      .then((response) => {
        setIsLoading(false);
        setUserData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        let newError = { password: error.message.description };
        setErrors({ ...errors, ...newError });
      });
  }

  return (
    <LogoLayout isLoading={isLoading}>
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <StatusBar hidden={true} />
          <ScreenHeaderText headerLevel={2}>
            {getLangObject().AuthSignInPassword.screenHeader}
          </ScreenHeaderText>
          <View style={styles.description}>
            <ScreenHeaderText headerLevel={4}>
              {getLangObject().AuthSignInPassword.screenDescription}
            </ScreenHeaderText>
          </View>
          <StandardInput
            label="Password"
            placeholder="Enter password"
            viewStyle={{ marginTop: 8, width: "100%" }}
            onChangeText={(text) => formFieldChangeHandler(text, setPassword)}
            error={errors.password}
            keyboardType="default"
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

export default LoginByPassword;

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
  btnContainer: {
    marginTop: 24,
    alignSelf: "flex-end",
  },
});
