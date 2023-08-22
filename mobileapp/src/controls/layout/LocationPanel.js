import { StyleSheet, View, Text } from "react-native";

import LocationText from "../texts/location/LocationText";
import LocationIcon from "../icons/LocationIcon";
import LocationButton from "../buttons/LocationButton";

function LocationPanel({ children, location }) {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <LocationIcon style={{ marginTop: 2 }} />
        <LocationText
          title={
            location
              ? location.street
                ? location.street
                : location.district
              : ""
          }
          area={
            location
              ? location.district
                ? location.district + ", "
                : "" + location.city + ", " + location.postalCode
              : ""
          }
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
