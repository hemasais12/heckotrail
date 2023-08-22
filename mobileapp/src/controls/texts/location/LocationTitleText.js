import { StyleSheet, Text } from "react-native";
import { GlobalColors } from "../../../common/colors";

function LocationTitleText({ children, style }) {
  return <Text style={{ ...styles.container, ...style }}>{children}</Text>;
}

export default LocationTitleText;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalColors.location.title,
  },
});
