import { StyleSheet, View } from "react-native";
import ButtonHzLinearGradient from "../gradients/ButtonHzLinearGradient";
import PrimaryButtonText from "../texts/PrimaryButtonText";
import CustomerPressable from "../commons/CustomPressable";

function StandardButton({ children, onPress, viewStyle }) {
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

export default StandardButton;

const styles = StyleSheet.create({
  container: {},
});
