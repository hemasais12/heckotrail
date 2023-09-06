import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const VendorHomeScreen = (props) => {
  return (
    <>
    <View>
      <View style={styles.mainView}>
        <View style={styles.bodyView}>
          <View style={styles.innerBodyView}>
            <Image
              source={require("../assets/Human.png")}
              style={styles.imageSize}
            />
            <TouchableOpacity
              //onPress={() => props.navigation.navigate("ProfileDetailsScreen")}
            >
              <Text style={styles.imageText}>Shop Name</Text>
              <Text style={styles.imageText1}>Service type</Text>
              <Text style={styles.imageText1}>Address</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomImgView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Services")}
          >
            <Image
              source={require("../assets/home.png")}
              style={styles.bottomImageSize}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomImgView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Customer")}
          >
            <Image
              source={require("../assets/heart.png")}
              style={styles.bottomImageSize}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomImgView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Account Details")}
          >
            <Image
              source={require("../assets/Human.png")}
              style={styles.bottomImageSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  );
};

export default VendorHomeScreen;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  bodyView: {
    height: 569,
    width: 350,
  },
  bottomView: {
    backgroundColor: "orange",
    height: 80,
    width: 393,
    marginVertical: 15,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  innerBodyView: {
    backgroundColor: "lightblue",
    height: 80,
    width: 350,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
  },
  imageSize: {
    height: 45,
    width: 45,
    marginLeft: 15,
    marginTop: 12,
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    marginLeft: 20,
  },
  imageText1: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
  },
  bottomImgView: {
    marginRight: 100,
  },
  bottomImageSize: {
    height: 40,
    width: 40,
    marginLeft: 17,
    marginTop: 17,
    resizeMode:"contain",
  },
});
