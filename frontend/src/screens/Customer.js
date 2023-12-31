import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { lightgreen } from "../common/Constants";

const Customer = (props) => {
  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.headingText}>Select Services</Text>
        <Text style={styles.subtext}>Please select service type</Text>
        <Text style={styles.subtext}>To continue</Text>
      </View>
      <View style={styles.servicesIcons}>
        <View style={styles.imageIcon}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("CustomerBikeService")}
          >
            <View style={styles.serviceView}>
              <Image
                source={require("../assets/bike.png")}
                style={styles.imageSize}
              />
              <Text style={styles.imageText}>Bike</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageIcon}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("CustomerBikeService")}
          >
            <View style={styles.serviceView}>
              <Image
                source={require("../assets/car.png")}
                style={styles.imageSize}
              />
              <Text style={styles.imageText}>Car</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageIcon}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("CustomerBikeService")}
          >
            <View style={styles.serviceView}>
              <Image
                source={require("../assets/setting.png")}
                style={styles.imageSize}
              />
              <Text style={styles.imageText}>Setting</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Customer;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 30,
    marginVertical: 100,
  },
  headingText: {
    fontSize: 35,
    marginBottom: 40,
  },
  servicesIcons: {
    display: "flex",
    flexDirection: "row",
    marginTop: -40,
    marginLeft: 20,
  },
  subtext: {
    fontSize: 17,
  },
  imageIcon: {
    marginLeft: 20,
  },
  imageSize: {
    height: 40,
    width: 40,
    marginLeft: 25,
    marginTop: 10,
    resizeMode: "contain",
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  serviceView:{
    width: 90,
    height: 90,
    backgroundColor: lightgreen,
    borderRadius: 20,
  },
});
