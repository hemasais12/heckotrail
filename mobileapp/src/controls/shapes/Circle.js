import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import { Feather } from "@expo/vector-icons";
import CustomerPressable from "../commons/CustomPressable";

function Circle({ size, borderWidth, borderColor }) {
  return (
    <View
      style={{
        ...styles.shape,
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}
    ></View>
  );
}

export default Circle;

const styles = StyleSheet.create({
  shape: {},
});
