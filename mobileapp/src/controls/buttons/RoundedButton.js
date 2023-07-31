import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import { LinearGradient } from "expo-linear-gradient";

function RoundedButton({ children, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        {/*<LinearGradient
          colors={[
            GlobalColors.primaryButton.dark,
            GlobalColors.primaryButton.light,
          ]}
          style={styles.linearGradient}
        >*/}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            GlobalColors.primaryButton.light,
            GlobalColors.primaryButton.dark,
          ]}
          style={styles.linearGradient}
        >
          <View style={styles.textcontainer}>
            <Text style={styles.buttonText}>
              {children} {"     "}
            </Text>
            <Text style={styles.buttonArrow}> →</Text>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default RoundedButton;

const styles = StyleSheet.create({
  linearGradient: {
    paddingRight: GlobalSizes.primaryButton.paddingRight,
    paddingLeft: GlobalSizes.primaryButton.paddingLeft,
    paddingVertical: GlobalSizes.primaryButton.paddingVertical,
    borderRadius: GlobalSizes.primaryButton.radius,
    borderColor: GlobalColors.primaryButton.dark,
    borderWidth: GlobalSizes.primaryButton.borderWidth,
  },

  textcontainer: {
    flexDirection: "row",
  },

  buttonText: {
    color: GlobalColors.primaryButton.text,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttonArrow: {
    color: GlobalColors.primaryButton.text,
    textAlign: "left",
  },

  pressed: {
    opacity: GlobalSizes.primaryButton.pressedOpacity,
    backgroundColor: GlobalColors.primaryButton.pressed,
    borderRadius: GlobalSizes.primaryButton.radius,
  },
});
