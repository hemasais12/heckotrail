import { useState } from "react";
import { StyleSheet, View, Dimensions, Image, Keyboard } from "react-native";
import { GlobalColors } from "../../common/colors";
import SphereImages from "../../views/SphereImages";
import DesignerBackground from "./DesignerBackground";

const screen = Dimensions.get("screen");
const width = screen.width;
const height = screen.height;

function LogoBackgroundA() {
  const [keyBoardVisible, setKeyBoardVisible] = useState(false);

  const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
    setKeyBoardVisible(true);
  });
  const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
    setKeyBoardVisible(false);
  });

  return (
    <View style={styles.container}>
      <DesignerBackground />

      <View style={styles.logoImageContainer}>
        {(!keyBoardVisible || height > 700) && (
          <Image
            style={styles.logoImage}
            source={require("../../assets/logo/logo.png")}
          />
        )}
      </View>

      <View style={styles.bubbles}>
        <SphereImages />
      </View>
    </View>
  );
}

export default LogoBackgroundA;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: GlobalColors.app.bgcolor,
    position: "absolute",
  },

  logoImageContainer: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  logoImage: {
    width: "100%",
    marginLeft: 8,
    resizeMode: "contain",
  },

  bubbles: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
