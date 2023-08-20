import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import RoundedButton from "../../controls/buttons/RoundedButton";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";
import NormalText from "../../controls/texts/NormalText";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import TextLink from "../../views/TextLink";

const screen = Dimensions.get("screen");

function LoginId({ route, navigation }) {
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

  function submitHandler() {
    navigation.navigate("ConfirmOTP", { isSignup: isSignup });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <View style={styles.partialGreyBG}></View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo/logo.png")}
          />
        </View>
        <View style={styles.tagLineContainer}>
          <ScreenHeaderText headerLevel={3}>
            Expert Services at your tips
          </ScreenHeaderText>
          <ScreenHeaderText headerLevel={5}>
            Affordable as No commission
          </ScreenHeaderText>
          <NormalText>{"Search   •   Review   •   Use"}</NormalText>
        </View>
        <View style={styles.headers}>
          <ScreenHeaderText>
            {isSignup ? "Sign up" : "Sign In"}
          </ScreenHeaderText>
          <NormalText>Please enter mobile number or email:</NormalText>
        </View>

        <View style={styles.phoneEmailContainer}>
          <PhoneOrEmailInput />
          <View style={styles.submitButton}>
            <RoundedButton onPress={submitHandler}>
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
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginId;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
  tagLineContainer: {
    alignItems: "flex-start",
    alignItems: "center",
    marginTop: 30,
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
