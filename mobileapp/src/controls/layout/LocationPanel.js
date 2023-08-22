import { StyleSheet, View, Text } from "react-native";

import LocationText from "../texts/location/LocationText";
import LocationIcon from "../icons/LocationIcon";
import LocationButton from "../buttons/LocationButton";
import { getLocationTitle, getLocationArea } from "../../utils/LocationUtils";

function LocationPanel({ children, location }) {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <LocationIcon style={{ marginTop: 2 }} />
        <LocationText
          title={getLocationTitle(location)}
          area={getLocationArea(location)}
          style={{ marginLeft: 4 }}
        >
          Text
        </LocationText>
      </View>
      <LocationButton viewStyle={{ marginTop: 16 }}>
        Enter Complte Address
      </LocationButton>
    </View>
  );
}

export default LocationPanel;

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 16,
  },
  location: {
    flexDirection: "row",
  },
});
