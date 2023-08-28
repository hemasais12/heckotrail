import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import Bubbles from "../../views/Bubbles";
import SphereImages from "../../views/SphereImages";
import CustomPressable from "../commons/CustomPressable";
import LogoBackgroundA from "./LogoBackgroundA";
import SplashPanel from "./SplashPanel";

const screen = Dimensions.get("screen");

function LogoLayout({ children, isLoading = false, logoVisible = true }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LogoBackgroundA logoVisible={logoVisible} />
      <SplashPanel isLoading={isLoading} />
      <View style={styles.contentContainer}>{children}</View>
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
    borderColor: "blue",
    borderWidth: 1,
  },
});
