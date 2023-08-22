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

function ScreenBackground({ children, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <StatusBar hidden={false} />
      {children}
    </View>
  );
}

export default ScreenBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.app.bgcolor,
    padding: 8,
  },
});
