import { StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../../common/colors";
import LocationTitleText from "./LocationTitleText";

function LocationAreaText({ children, viewStyle, textStyle }) {
  return (
    <View style={{ ...styles.container, ...viewStyle }}>
      <Text style={{ ...styles.textStyle, ...textStyle }}>{children}</Text>
    </View>
  );
}

export default LocationAreaText;

const styles = StyleSheet.create({
  container: {},
  textStyle: { color: GlobalColors.location.area },
});
