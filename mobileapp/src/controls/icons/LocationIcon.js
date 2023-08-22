import { StyleSheet, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { Ionicons } from "@expo/vector-icons";

function LocationIcon({ children, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Ionicons
        name="ios-location-sharp"
        size={20}
        color={GlobalColors.location.icon}
      />
    </View>
  );
}

export default LocationIcon;

const styles = StyleSheet.create({
  container: {},
});
