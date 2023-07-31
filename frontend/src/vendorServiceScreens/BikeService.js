import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Btn from "../common/Btn";
import { yellow } from "../common/Constants";

const BikeService = (props) => {
  return (
    <View>
      <View style={styles.mainView}>
        <Text style={styles.headingText}>Register Services</Text>
        <Text style={styles.subtext}>Please enter details</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Vendor/Shop Name" />
        <TextInput
          style={styles.input}
          placeholder="Contact"
          keyboardType="number-pad"
        />
        <TextInput style={styles.input} placeholder="Address Line 1" />
        <TextInput style={styles.input} placeholder="Address Line 2" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="State" />
        <TextInput
          style={styles.input}
          placeholder="Pin"
          keyboardType="number-pad"
        />
      </View>
      <View style={{ paddingLeft: 190, marginTop: 50 }}>
        <Btn
          textColor="white"
          bgColor={yellow}
          btnLabel="Submit ->"
          Press={() => {props.navigation.navigate("Registered Services")}}
        />
      </View>
    </View>
  );
};

export default BikeService;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 30,
    marginVertical: 40,
  },
  headingText: {
    fontSize: 35,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 17,
  },
  input: {
    height: 50,
    marginHorizontal: 13,
    borderBottomWidth: 1,
    padding: 10,
  },
  form: {
    marginHorizontal: 30,
  },
});
