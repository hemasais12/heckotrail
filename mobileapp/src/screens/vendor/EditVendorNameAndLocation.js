import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, StatusBar, Text, Dimensions } from "react-native";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import SearchTextBox from "../../views/SearchTextBox";
import { GlobalColors } from "../../common/colors";
import LocationPanel from "../../controls/layout/LocationPanel";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { getLangObject } from "../../utils/LanguageUtil";
import EditVendorAddress from "./EditVendorAddress";

const screen = Dimensions.get("screen");
const screenHeight = screen.height;
const screenWidth = screen.width;

function EditVendorNameAndLocation() {
  const [region, setRegion] = useState();
  const [address, setAddress] = useState();
  const [pickedLocation, setPickedLocation] = useState();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  async function verifyPermissions() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    return true;
  }

  async function getCurrentLocation() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    let currentLocation = await getCurrentPositionAsync();

    setPickedLocation({
      lat: currentLocation.coords.latitude,
      lng: currentLocation.coords.longitude,
    });

    setRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    const { latitude, longitude } = currentLocation.coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    console.log(response[0]);
    setAddress(response[0]);
  }

  async function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    var newRegion = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    // setArray((oldArray) => [...oldArray, newValue]);
    setRegion(newRegion);

    const { latitude, longitude } = event.nativeEvent.coordinate;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    setAddress(response[0]);
    //this
    console.log(response[0]);
  }

  useEffect(() => {
    getCurrentLocation().catch((error) => {
      // Handle any errors that occur
      console.error(error);
    });
  }, []);

  function editAddressHandler() {
    console.log("edit address");
    setModalIsVisible(true);
  }

  function editAddressHandlerClose() {
    setModalIsVisible(false);
  }

  return (
    <ScreenBackground style={styles.screenContainer}>
      {region && (
        <>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={region}
              onPress={selectLocationHandler}
            >
              <Marker
                key={region}
                coordinate={region}
                pinColor={GlobalColors.location.pin}
              />
            </MapView>
          </View>
          <LocationPanel location={address} onPress={editAddressHandler} />
          <View style={styles.searchContainer}>
            <SearchTextBox
              placeholder={getLangObject().Location.searchPlaceholder}
            />
          </View>
          <EditVendorAddress
            visible={modalIsVisible}
            onClose={editAddressHandlerClose}
          />
        </>
      )}
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
