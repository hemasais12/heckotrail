import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const BikeServicesTypes = () => {
  return (
    <View style={styles.mainView}>
      {/* <Text style={styles.headingText}>Service Types</Text> */}
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.bodyHeadText}>Engine Oils</Text>
          <View style={styles.innerBodyView}>
            <Image
              source={require("../assets/setting.png")}
              style={styles.imageSize}
            />
            <View>
              <Text style={styles.imageText}>Engine Oil</Text>
              <Text style={styles.imageText1}>100 Rs</Text>
            </View>
          </View>
          <View style={styles.innerBodyView}>
            <Image
              source={require("../assets/setting.png")}
              style={styles.imageSize}
            />
            <View>
              <Text style={styles.imageText}>Engine Oil</Text>
              <Text style={styles.imageText1}>200 Rs</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.bodyHeadText}>Water Wash</Text>
          <View style={styles.innerBodyView}>
            <Image
              source={require("../assets/setting.png")}
              style={styles.imageSize}
            />
            <View>
              <Text style={styles.imageText}>Engine Oil</Text>
              <Text style={styles.imageText1}>100 Rs</Text>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BikeServicesTypes;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    width: 340,
    height: 630,
    borderRadius: 10,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: "#F8c390",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  bodyHeadText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
  },
  innerBodyView: {
    backgroundColor:"#FFCDD2",
    height: 80,
    width: 320,
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    marginTop:10,
  },
  imageSize: {
    height: 45,
    width: 45,
    marginLeft: 15,
    marginTop: 15,
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
  },
  imageText1: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
    marginTop:4,
  },
});
