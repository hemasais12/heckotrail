import { StyleSheet, View, StatusBar, Image, Dimensions } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import RoundedButton from "../../controls/buttons/RoundedButton";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import ScreenSubHeaderText from "../../controls/texts/ScreenSubHeaderText";
import TextLink from "../../views/TextLink";

const screen = Dimensions.get("screen");

function LoginId() {
  let isSignup = false;

  function signupClickHandler() {}

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      <View style={styles.partialGreyBG}></View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo/logo.png")}
        />
      </View>
      <View style={styles.headers}>
        <ScreenHeaderText>{isSignup ? "Signup" : "Login"}</ScreenHeaderText>
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

export default LoginId;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: GlobalSizes.app.padding,
    backgroundColor: GlobalColors.app.bgcolor,
  },

  logoContainer: {
    height: 150,
    width: 150,
  },

  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  headers: {
    justifyContent: "center",
    flex: 1,
  },

  phoneEmailContainer: {
    alignItems: "flex-start",
    flex: 2,
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
  partialGreyBG: {
    backgroundColor: GlobalColors.app.partialColor,
    height: screen.width * 2,
    width: screen.width * 2,
    borderRadius: screen.width * 2,
    position: "absolute",
    bottom: screen.height * 0.72,
    marginLeft: -1.2 * screen.width,
  },
});
