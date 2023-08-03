import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function ButtonPressable({ children, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        {children}
      </Pressable>
    </View>
  );
}

export default ButtonPressable;

const styles = StyleSheet.create({
  pressed: {
    opacity: GlobalSizes.primaryButton.pressedOpacity,
    backgroundColor: GlobalColors.primaryButton.pressed,
    borderRadius: GlobalSizes.primaryButton.radius,
  },
  container:{
    marginHorizontal:6,
  }
});
