import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, StatusBar, Text, Dimensions } from "react-native";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import SearchTextBox from "../../views/SearchTextBox";
import { GlobalColors } from "../../common/colors";

const screen = Dimensions.get("screen");
const screenHeight = screen.height;
const screenWidth = screen.width;

function EditVendorNameAndLocation() {
  console.log("Map view");
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <ScreenBackground style={styles.screenContainer}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={region}></MapView>
      </View>
      <View style={styles.locationContainer}>
        <Text>Devin Paradise</Text>
        <Text>Bangalore</Text>
        <Text>Enter Complete Address</Text>
      </View>
      <View style={styles.searchContainer}>
        <SearchTextBox />
      </View>
    </ScreenBackground>
  );
}

export default EditVendorNameAndLocation;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 0,
  },
  mapContainer: {
    flex: 1,
  },
  locationContainer: {
    height: 150,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",
    width: screenWidth - 16,
    backgroundColor: GlobalColors.app.bgcolor,
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 4,
  },
});
