import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import { GlobalFonts } from "../../common/fonts";
import { LinearGradient } from "expo-linear-gradient";
import ButtonPressable from "./ButtonPressable";
import ButtonHzLinearGradient from "../gradients/ButtonHzLinearGradient";
import PrimaryButtonText from "../texts/PrimaryButtonText";
import CustomerPressable from "../commons/CustomPressable";
import { adjustFont, adjustWidth } from "../../common/AdjustSize";

function RoundedButton({ children, onPress }) {
  return (
    <View style={styles.container}>
      <CustomerPressable onPress={onPress}>
        <ButtonHzLinearGradient>
          <PrimaryButtonText>{children}</PrimaryButtonText>
        </ButtonHzLinearGradient>
      </CustomerPressable>
    </View>
  );
}

export default RoundedButton;

const styles = StyleSheet.create({
  container: {},
});
