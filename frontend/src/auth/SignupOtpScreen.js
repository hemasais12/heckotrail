import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import Btn from "../common/Btn";
import { yellow } from "../common/Constants";
import AuthService from "../services/auth.service";

const OtpScreen = (props) => {
  const [otp, setOtp] = useState(null);
  const [referralCode, setReferralCode] = useState(null);
  const mobileNumber = props.route.params.phoneNumber;

  const sendData = () => {
    const signupRequest = {
      mobileNumber: mobileNumber,
      otp: otp,
      referralCode: referralCode,
    };
    AuthService.signupWithOtp(signupRequest).then((response) => {
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
        <Text style={styles.subtext1}>Please enter Otp to continue</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Otp to login"
            onChangeText={(value) => setOtp(value)}
          />
          <View style={styles.referralView}>
            <Text style={styles.referralText}>Have any referral code?</Text>
            <TextInput
              style={styles.referralInput}
              placeholder="Referral Code"
              onChangeText={(value) => setReferralCode(value)}
            />
          </View>
          <View style={styles.buttonView}>
            <Btn
              textColor="white"
              bgColor={yellow}
              btnLabel="Login ->"
              Press={sendData}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.text2}>Already have an account ? </Text>
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

export default OtpScreen;

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
  contentView: {
    marginHorizontal: 30,
    marginVertical: 100,
  },
  text1: {
    color: "black",
    fontSize: 30,
    marginLeft: 10,
  },
  subtext1: {
    color: "black",
    fontSize: 15,
    marginBottom: 40,
    marginLeft: 10,
  },
  buttonView: {
    width: "78%",
    marginBottom: 150,
    marginTop: 20,
    paddingLeft: 180,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
  referralInput: {
    height: 40,
    width: 140,
    borderWidth: 0.6,
    paddingLeft: 10,
  },
  referralText: {
    height: 40,
    width: 150,
    marginRight: 20,
    paddingTop: 8,
  },
  referralView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },
});
