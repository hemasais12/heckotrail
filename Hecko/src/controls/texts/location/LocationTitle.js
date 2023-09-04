import { StyleSheet, View } from "react-native";
import LocationIcon from "../../icons/LocationIcon";
import LocationTitleText from "./LocationTitleText";

function LocationTitle({ children }) {
  return (
    <View style={styles.container}>
      <LocationIcon />
      <LocationTitleText style={{ marginLeft: 4 }}>Text</LocationTitleText>
    </View>
  );
}

export default LocationTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
