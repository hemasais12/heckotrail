import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import { GlobalFonts } from "../../common/fonts";
import { LinearGradient } from "expo-linear-gradient";
import ButtonPressable from "./ButtonPressable";
import ButtonHzLinearGradient from "../gradients/ButtonHzLinearGradient";

function RoundedButton({ children, onPress }) {
  return (
    <View>
      <ButtonPressable onPress={onPress}>
        <ButtonHzLinearGradient>
          <View style={styles.textcontainer}>
            <Text style={styles.buttonText}>
              {children} {"     "}
            </Text>
            <Text style={styles.buttonArrow}> →</Text>
          </View>
        </ButtonHzLinearGradient>
      </ButtonPressable>
    </View>
  );
}

export default RoundedButton;

const styles = StyleSheet.create({
  textcontainer: {
    flexDirection: "row",
  },

  buttonText: {
    color: GlobalColors.primaryButton.text,
    textAlign: "center",
    fontWeight: GlobalFonts.primaryButton.fontWeight,
  },

  buttonArrow: {
    color: GlobalColors.primaryButton.text,
    textAlign: "left",
  },
});
