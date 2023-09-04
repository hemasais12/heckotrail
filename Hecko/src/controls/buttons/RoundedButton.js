import { StyleSheet, View } from "react-native";
import ButtonHzLinearGradient from "../gradients/ButtonHzLinearGradient";
import PrimaryButtonText from "../texts/PrimaryButtonText";
import CustomerPressable from "../commons/CustomPressable";

function RoundedButton({ children, onPress, viewStyle }) {
  return (
    <View style={{ ...styles.container, ...viewStyle }}>
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
