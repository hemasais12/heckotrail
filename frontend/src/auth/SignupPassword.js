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

const SignupPassword = (props) => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [otp, setOtp] = useState(null);
  const [referralCode,setReferralCode]=useState(null);
  const email=props.route.params.email;

  const sendData = () => {
    fetch(
      `http://10.226.212.101:5000/api/auth/signup/byemail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email:email,
            password:password,
            confirmPassword:confirmPassword,
            otp:otp,
            referralCode:referralCode,
        }),
      }
    ).then((response) => {
      if (response.ok == true) {
        props.navigation.navigate("Login")
      }
      else{
        console.warn("Please Provide Correct Details")
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
        <Text style={styles.text1}>Password</Text>
        <Text style={styles.subtext1}>Please enter password to login</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(password) => setConfirmPassword(password)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Otp"
            secureTextEntry={true}
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
            <Text style={styles.bottontext1}>Already have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.bottontext2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupPassword;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderBottomWidth: 1,
    padding: 10,
  },
  referralInput:{
    height: 40,
    width:150,
    borderWidth:0.6,
    paddingLeft:10,
  },
  referralText:{
    height:40,
    width:150,
    marginRight:20,
    paddingTop:8,
  },
  referralView: {
    display: "flex",
    flexDirection: "row",
    marginTop:20,
    marginLeft:10
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
    marginBottom: 100,
    marginTop: 20,
    paddingLeft: 170,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
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
