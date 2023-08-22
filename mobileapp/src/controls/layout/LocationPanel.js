import { StyleSheet, View, Text } from "react-native";

import LocationText from "../texts/location/LocationText";
import LocationIcon from "../icons/LocationIcon";
import StandardButton from "../buttons/StandardButton";
import { getLocationTitle, getLocationArea } from "../../utils/LocationUtils";
import { getLangObject } from "../../utils/LanguageUtil";

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

      <StandardButton viewStyle={{ marginTop: 16 }}>
        {getLangObject().Location.enterCompleteAddress}
      </StandardButton>
    </View>
  );
}

export default LocationPanel;

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 16,
  },
  location: {
    flexDirection: "row",
  },
});
