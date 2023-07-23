import React from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import Btn from "../Btn";
import { yellow } from "../Constants";

const Signup = (props) => {
  return (
    <View>
      <View style={{ paddingLeft: 20, marginTop: 40 }}>
        <View style={styles.headingView}>
          <Image
            source={require("../assets/logo1.png")}
            style={styles.imageView}
          />
          <Text style={styles.heading}>Hecko</Text>
        </View>
        <Text style={styles.subHeading}>Services At Your Tips</Text>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.bodyInnerView}>
          <Text style={styles.bodyHeaader}>Sign up</Text>
          <Text style={styles.bodySubHeader}>Please sign up to continue</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            keyboardType={"email-address"}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType={"number-pad"}
          />
          <TextInput style={styles.input} placeholder="Email Id" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonView}>
          <Btn
            textColor="white"
            bgColor={yellow}
            btnLabel="Submit ->"
            Press={() => props.navigation.navigate("OtpScreen")}
            // Press={() => {
            //   alert("Accoutn created");
            //   props.navigation.navigate("Login");
            // }}
          />
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.bottontext1}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.bottontext2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 8,
    borderBottomWidth: 1,
    padding: 10,
  },
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
    marginBottom: 30,
  },
  bodyView: {
    backgroundColor: "white",
    borderTopLeftRadius: 130,
    width: "100%",
    height: "100%",
  },
  bodyInnerView: {
    marginHorizontal: 30,
    marginVertical: 50,
  },
  bodyHeaader: {
    color: "black",
    fontSize: 30,
    paddingLeft: 120,
    marginTop: -30,
  },
  bodySubHeader: {
    color: "black",
    fontSize: 15,
    marginBottom: 20,
    paddingLeft: 80,
  },
  buttonView: {
    paddingLeft: 190,
    marginTop: -30,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
  },
  bottontext1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottontext2: {
    color: yellow,
    fontWeight: "bold",
    fontSize: 16,
  },
});
