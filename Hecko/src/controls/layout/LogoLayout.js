import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LogoBackgroundA from "./LogoBackgroundA";
import SplashPanel from "./SplashPanel";

const screen = Dimensions.get("screen");

function LogoLayout({ children, isLoading = false, showLogo = true }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LogoBackgroundA showLogo={showLogo} />
      <SplashPanel isLoading={isLoading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.contentContainer}>{children}</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LogoLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
