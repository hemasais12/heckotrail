import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function CustomPressable({ children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      {children}
    </Pressable>
  );
}

export default CustomPressable;

const styles = StyleSheet.create({
  pressed: {
    opacity: GlobalSizes.primaryButton.pressedOpacity,
    backgroundColor: GlobalColors.primaryButton.pressed,
    borderRadius: GlobalSizes.primaryButton.radius,
  },
});
