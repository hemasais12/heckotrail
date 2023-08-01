import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import { GlobalFonts } from "../../common/fonts";
import { LinearGradient } from "expo-linear-gradient";
import ButtonPressable from "./ButtonPressable";
import ButtonHzLinearGradient from "../gradients/ButtonHzLinearGradient";
import PrimaryButtonText from "../texts/PrimaryButtonText";

function RoundedButton({ children, onPress }) {
  return (
    <View>
      <ButtonPressable onPress={onPress}>
        <ButtonHzLinearGradient>
          <PrimaryButtonText>{children}</PrimaryButtonText>
        </ButtonHzLinearGradient>
      </ButtonPressable>
    </View>
  );
}

export default RoundedButton;
