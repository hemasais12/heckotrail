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

const screen = Dimensions.get("screen");

function LogoBackground({ children }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.customBackground}></View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/logo/logo.png")}
        />
      </View>
      <View style={styles.circleContainer}>
        <SphereImages />
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

export default LogoBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.app.bgcolor,
  },
  customBackground: {
    backgroundColor: GlobalColors.app.partialColor,
    height: screen.width * 2,
    width: screen.width * 2,
    borderRadius: screen.width * 2,
    position: "absolute",
    bottom: screen.height * 0.72,
    marginLeft: -1.2 * screen.width,
  },
  logoContainer: {
    height: 150,
    width: 150,
    marginTop: 15,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  circleContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  contentContainer: {
    width: "100%",
    height: "100%",
    padding: 8,
    position: "absolute",
  },
});
