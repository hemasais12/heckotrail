import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import Btn from "../common/Btn";
import { yellow } from "../common/Constants";
import AuthService from "../services/auth.service";

const LoginOtpScreen = (props) => {
  const [otp, setOtp] = useState(null);
  const mobileNumber = props.route.params.phoneNumber;

  const sendData = () => {
    const loginRequest = {
      mobileNumber: mobileNumber,
      otp: otp,
    };

    AuthService.loginWithOtp(loginRequest).then((response) => {
      if (response.responseType == "SUCCESS") {
        props.navigation.navigate("Home");
      } else {
        alert("Check Otp");
      }
    });
  };

  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={styles.headingView}>
          <Image
            source={require("../assets/logo1.png")}
            style={styles.imageView}
          />
          <Text style={styles.heading}>Hecko</Text>
        </View>
        <Text style={styles.subHeading}>Services At Your Response</Text>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.text1}>OTP</Text>
        <Text style={styles.subtext1}>Please enter Otp to login</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Otp to login"
            onChangeText={(value) => setOtp(value)}
          />
          <View style={styles.buttonView}>
            <Btn
              textColor="white"
              bgColor={yellow}
              btnLabel="Login ->"
              Press={sendData}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.text2}>Already have an account ? ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.text3}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginOtpScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
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
  contentView: {
    marginHorizontal: 30,
    marginVertical: 100,
  },
  text1: {
    color: "black",
    fontSize: 30,
  },
  subtext1: {
    color: "black",
    fontSize: 15,
    marginBottom: 40,
  },
  buttonView: {
    width: "78%",
    marginBottom: 180,
    marginTop: 10,
    paddingLeft: 150,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text3: {
    color: yellow,
    fontWeight: "bold",
    fontSize: 16,
  },
});
