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

const Login = (props) => {
  const [emailorphone, setEmailorphone] = useState(null);

  const saveData = () => {
    fetch(
      `http://10.226.212.101:5000/api/auth/signin/verifyemailormobilenumber`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrMobileNumber: emailorphone,
        }),
      }
    ).then((response) => {
      if (response.ok == true) {
        if (emailorphone.slice(-3) == "com") {
          props.navigation.navigate("LoginPassword", { email: emailorphone });
        } else {
          props.navigation.navigate("LoginOtpScreen", {
            phoneNumber: emailorphone,
          });
        }
      } else alert("User not found");
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
      <View style={styles.bodyView}>
        <View style={styles.bodyInnerView}>
          <Text style={styles.text1}>Login</Text>
          <Text style={styles.subtext1}>Please sign in to continue</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Id / mobile number"
            onChangeText={(value) => setEmailorphone(value)}
          />
        </View>
        <View style={styles.buttonView}>
          <Btn
            textColor="white"
            bgColor={yellow}
            btnLabel="Submit ->"
            Press={saveData}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.text2}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={styles.text3}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
  text1: {
    color: "black",
    fontSize: 30,
    paddingLeft: 135,
    marginTop: -10,
  },
  subtext1: {
    color: "black",
    fontSize: 15,
    marginBottom: 100,
    paddingLeft: 80,
  },
  buttonView: {
    paddingLeft: 190,
    marginTop: -20,
  },
  bottomView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 200,
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
