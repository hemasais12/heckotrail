import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const VendorProfileMenu = (props) => {
  return (
    <View style={styles.mainView}>
        <View style={styles.innerBodyView}>
          <Image
            source={require("../assets/Human.png")}
            style={styles.imageSize}
          />
          <TouchableOpacity 
            style={styles.innerbodyViewEnd}
            // onPress={() => props.navigation.navigate("ProfileDetailsScreen")} 
            >
            <View>
              <Text style={styles.imageText}>Hemasai</Text>
              <Text style={styles.imageText1}>sai@gmail.com</Text>
              <Text style={styles.imageText1}>+91 8179834529</Text>
            </View>
            <View style={styles.profileArrow}>
            <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.innerbodyView}>
          <TouchableOpacity
            style={styles.innerbodyView1}
            //onPress={() => props.navigation.navigate("Bike Services Types")}
          >
            <Text style={styles.bodyText}>Login As</Text>
            <View style={styles.rightBodyText}>
              <Text style={styles.bodyText1}>Vendor</Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyView1}
            //onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>Manage Address</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyViewEnd}
            //onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>Change Password</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.innerbodyView}>
          <TouchableOpacity
            style={styles.innerbodyView1}
            onPress={() => props.navigation.navigate("Bike Services Types")}
          >
            <Text style={styles.bodyText}>Services</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyView1}
            //onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>Past Services</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyView1}
            //onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>My Services</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyView1}
            //onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>My Products</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyViewEnd}
            //onPress={() => props.navigation.navigate("VendorHomeScreen")}
          >
            <Text style={styles.bodyText}>My Ratings</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.innerbodyView}>
          <TouchableOpacity
            style={styles.innerbodyView1}
            //onPress={() => props.navigation.navigate("Bike Services Types")}
          >
            <Text style={styles.bodyText}>Customer Support</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.innerbodyViewEnd}
            //onPress={() => props.navigation.navigate("Bike Services Types")}
          >
            <Text style={styles.bodyText}>Settings</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.innerbodyView}>
          <TouchableOpacity
            style={styles.innerbodyViewEnd}
            //onPress={() => props.navigation.navigate("Bike Services Types")}
          >
            <Text style={styles.bodyText}>Logout</Text>
            <View style={styles.rightBodyText}>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrowImageSize}
              />
            </View>
          </TouchableOpacity>
          </View>
    </View>
  );
};

export default VendorProfileMenu;

const styles = StyleSheet.create({
  mainView: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  innerbodyView: {
    marginTop: 25,
    borderWidth: 0.5,
    paddingLeft: 15,
    paddingRight: 10,
  },
  innerbodyView1: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },
  innerbodyViewEnd: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bodyText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  bodyText1: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    width: 80,
  },
  innerBodyView: {
    borderWidth: 0.5,
    height: 100,
    display: "flex",
    flexDirection: "row",
  },
  imageSize: {
    height: 53,
    width: 53,
    marginLeft: 19,
    marginTop: 20,
  },
  arrowImageSize: {
    height: 10,
    width: 10,
    marginTop: 17,
    marginRight:20,
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 13,
    marginLeft: 20,
  },
  imageText1: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 20,
    marginRight: 10,
  },
  rightBodyText: {
    display: "flex",
    flexDirection: "row",
  },
  profileArrow: {
    marginTop: 25,
    marginLeft:141,
  }
});
