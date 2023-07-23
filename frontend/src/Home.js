import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

const Home = (props) => {
  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={styles.headingView}>
          <Image
            source={require("./assets/logo1.png")}
            style={styles.imageView}
          />
          <Text style={styles.heading}>Hecko</Text>
        </View>
        <Text style={styles.subHeading}>Services At Your Response</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.text1}>Login As</Text>
        <Text style={styles.subtext1}>
          Please select you are user or vendor
        </Text>
        <Text style={styles.subtext2}>to continue</Text>
        <View>
          <View style={styles.boxes}>
            <View style={styles.boxesView}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Vendor")}
              >
                <Image
                  source={require("./assets/vendor.png")}
                  style={styles.boximageView}
                />
                <Text style={styles.imageText}>Vendor</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.customerView}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Customer")}
              >
                <Image
                  source={require("./assets/customer.png")}
                  style={styles.boximageView}
                />
                <Text style={styles.imageText}>Customer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingView: {
    display: "flex",
    flexDirection: "row",
  },
  imageView: {
    height: 50,
    width: 50,
  },
  heading: {
    color: "black",
    fontSize: 44,
  },
  subHeading: {
    color: "black",
    fontSize: 15,
  },
  mainView: {
    marginHorizontal: 30,
    marginVertical: 100,
  },
  text1: {
    color: "black",
    fontSize: 30,
    marginBottom: 5,
  },
  subtext1: {
    color: "black",
    fontSize: 15,
  },
  subtext2: {
    color: "black",
    fontSize: 15,
    marginBottom: 40,
  },
  boxes: {
    display: "flex",
    flexDirection: "row",
  },
  boxesView: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "yellow",
  },
  boximageView: {
    height: 100,
    width: 120,
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "white",
  },
  customerView: {
    marginLeft: 40,
    borderWidth: 1,
    borderColor: "yellow",
  },
});
