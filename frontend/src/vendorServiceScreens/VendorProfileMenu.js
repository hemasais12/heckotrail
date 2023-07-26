import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const VendorProfileMenu = (props) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.headerText}>Vendor Profile Menu</Text>
      <View style={styles.bodyView}>
        <View style={styles.innerbodyView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("BikeServicesTypes")}
          >
            <Text style={styles.bodyText}>Services</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerbodyView}>
        <TouchableOpacity
            onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VendorProfileMenu;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  innerbodyView: {
    marginTop: 15,
    borderWidth: 0.5,
    padding: 10,
  },
  bodyText: {
    fontSize: 15,
  },
});
