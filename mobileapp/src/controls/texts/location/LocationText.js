import { StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../../common/colors";
import LocationAreaText from "./LocationAreaText";
import LocationTitleText from "./LocationTitleText";

function LocationText({ title, area, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <LocationTitleText>{title}</LocationTitleText>
      <LocationAreaText>{area}</LocationAreaText>
    </View>
  );
}

export default LocationText;

const styles = StyleSheet.create({
  container: {},
});
