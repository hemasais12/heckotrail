import { StyleSheet, View, Dimensions, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import SphereImages from "../../views/SphereImages";

const screen = Dimensions.get("screen");

function DesignerBackground() {
  return (
    <View style={styles.container}>
      <View style={styles.design}></View>
      <View style={styles.bubbles}>
        <SphereImages />
      </View>
    </View>
  );
}

export default DesignerBackground;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: GlobalColors.app.bgcolor,
    position: "absolute",
  },
  design: {
    backgroundColor: GlobalColors.app.partialColor,
    height: screen.width * 2,
    width: screen.width * 2,
    borderRadius: screen.width * 2,
    position: "absolute",
    bottom: screen.height * 0.72,
    marginLeft: -1.2 * screen.width,
  },

  bubbles: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
