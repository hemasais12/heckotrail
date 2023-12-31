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
              onPress={() => props.navigation.navigate("ProfileDetailsScreen")}
            >
              <Text style={styles.imageText}>Name</Text>
              <Text style={styles.imageText1}>Specalist</Text>
              <Text style={styles.imageText1}>Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomImgView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Customer")}
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
            onPress={() => props.navigation.navigate("Customer")}
          >
            <Image
              source={require("../assets/Human.png")}
              style={styles.bottomImageSize}
            />
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: 13,
    resizeMode:"contain",
    
  },
});
