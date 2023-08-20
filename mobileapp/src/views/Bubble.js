import { StyleSheet, View } from "react-native";
import { GlobalColors } from "../common/colors";
import Circle from "../controls/shapes/Circle";

function Bubble({ size, marginLeft, marginTop, borderWidth }) {
  return (
    <View
      style={{
        ...styles.bubble,
        marginTop: marginTop,
        marginLeft: marginLeft,
      }}
    >
      <Circle
        size={size}
        borderWidth={borderWidth}
        borderColor={GlobalColors.app.partialColor}
      ></Circle>
    </View>
  );
}

export default Bubble;

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
  },
});
