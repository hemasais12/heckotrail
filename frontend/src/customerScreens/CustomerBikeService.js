import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const BikeService = (props) => {
  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.header}>Bike Services</Text>
        <View style={styles.filterIcons}>
          <View style={styles.topFilterText}>
            <TouchableOpacity
            //onPress={() => props.navigation.navigate("CustomerBikeService")}
            >
              <Text style={styles.innerFilterText}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topFilterText1}>
            <TouchableOpacity>
              <Text style={styles.innerFilterText}>Top Rated</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topFilterText1}>
            <TouchableOpacity>
              <Text style={styles.innerFilterText}>Most Viewed</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyView}>
          <View style={styles.innerBodyView}>
            <Image
              source={require("../assets/Human.png")}
              style={styles.imageSize}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Customer")}
            >
              <Text style={styles.imageText}>Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}></View>
    </View>
  );
};

export default BikeService;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
  header: {
    fontSize: 35,
    marginBottom: 20,
  },
  filterIcons: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  innerFilterText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 3,
    color: "blue",
  },
  topFilterText: {
    width: 70,
    height: 30,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    marginRight: 15,
  },
  topFilterText1: {
    width: 110,
    height: 30,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    marginRight: 15,
  },
  bodyView: {
    backgroundColor: "green",
    height: 550,
    width: 350,
  },
  bottomView: {
    backgroundColor: "orange",
    height: 100,
    width: 393,
    marginVertical: -30,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  innerBodyView: {
    backgroundColor: "blue",
    height: 70,
    width: 350,
    display: "flex",
    flexDirection: "row",
  },
  imageSize: {
    height: 40,
    width: 40,
    marginLeft: 25,
    marginTop: 10,
  },
  imageText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
});
