import { StyleSheet, View } from "react-native";
import { GlobalSizes } from "../../common/sizes";
import RoundedButton from "../../controls/buttons/RoundedButton";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import ScreenSubHeaderText from "../../controls/texts/ScreenSubHeaderText";
import TextLink from "../../views/TextLink";

function InputId() {
  let isSignup = false;

  function signupClickHandler() {}

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headers}>
        <ScreenHeaderText> {isSignup ? "Signup" : "Login"}</ScreenHeaderText>
        <ScreenSubHeaderText>
          Please enter mobile number or email:
        </ScreenSubHeaderText>
      </View>

      <View style={styles.phoneEmailContainer}>
        <PhoneOrEmailInput />
        <View style={styles.submitButton}>
          <RoundedButton>Login</RoundedButton>
        </View>
        <View style={styles.link}>
          <TextLink linkText="Sign up" onLinkClick={signupClickHandler}>
            Don't have an account?
          </TextLink>
        </View>
      </View>
    </View>
  );
}

export default InputId;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headers: {
    justifyContent: "center",
    flex: 1,
  },

  phoneEmailContainer: {
    padding: GlobalSizes.app.padding,
    alignItems: "flex-start",
    flex: 3,
  },

  submitButton: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "flex-end",
    width: "100%",
  },
  link: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
    marginBottom: 16,
    flexDirection: "row",
    width: "100%",
  },
});
