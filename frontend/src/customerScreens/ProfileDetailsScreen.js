import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { lightskyblue } from "../common/Constants";

const ProfileDetailsScreen = () => {
  return (
    <View style={styles.mainView}>
      <View>
        <Image
          style={styles.imageSize}
          source={require("../assets/Human.png")}
        />
      </View>
      <View style={styles.bodyView}>
        <View style={styles.bioView}>
          <View style={styles.bioView1}>
            <Text style={styles.bioText}>Vendor Name</Text>
            <Text style={styles.bioText1}>Service Type</Text>
            <Text style={styles.bioText1}>experince</Text>
            <Text style={styles.bioText1}>rating**</Text>
          </View>
          <View style={styles.bioView2}>
            <Text style={styles.bioText2}>9:00 AM-5:00 PM</Text>
          </View>
        </View>
        <View style={styles.adressView}>
            <Text style={styles.addressText1}>Address</Text>
            <Text >Address Line 1</Text>
            <View style={styles.maps}>
                <Text>Maps</Text>
            </View>
        </View>
        <View style={styles.reviewView}>
            <Text style={styles.addressText1}>Doctor Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 40,
  },
  imageSize: {
    width: 373,
    height: 150,
    resizeMode: "contain",
    backgroundColor: "lightgrey",
  },
  bodyView: {
    backgroundColor: lightskyblue,
  },
  bioView: {
    display: "flex",
    flexDirection: "row",
  },
  bioView1: {
    margin: 10,
  },
  bioView2: {
    marginTop: 40,
    marginLeft: 80,
  },
  bioText2: {
    fontSize: 15,
  },
  bioText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bioText1: {
    fontSize: 15,
  },
  adressView:{
    marginLeft:10,
    marginTop:10,
  },
  addressText1:{
    fontWeight: "bold",
    fontSize:15,
  },
  maps:{
    width:350,
    height:80,
    backgroundColor:"lightgrey",
  },
  reviewView:{
    marginLeft:10,
    marginTop:10,
  },
});
