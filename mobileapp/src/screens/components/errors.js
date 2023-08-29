import { StyleSheet, Text } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function Errors(props) {
  return props.error && <Text style={styles.error}>{props.error}</Text>;
}

export default Errors;

const styles = StyleSheet.create({
  error: {
    color: GlobalColors.app.errorColor,
    fontSize: GlobalSizes.app.errorFontSize,
  },
});
