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
  import Btn from "../Btn";
  import { yellow } from "../Constants";
  
  const ForgotPassword = (props) => {
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
          <Text style={styles.text1}>Forgot Password ?</Text>
          <Text style={styles.subtext1}>Please enter email/ mobile number </Text>
          <Text style={styles.subtext2}>to continue</Text>
          <View>
            <TextInput style={styles.input} placeholder="Email Id / Mobile number" />
            <View style={styles.buttonView}>
              <Btn
                textColor="white"
                bgColor={yellow}
                btnLabel="Submit ->"
                Press={() => props.navigation.navigate("EmailOtp")}
              />
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.text2}>Don't have an account ? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
              >
                <Text style={styles.text3}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default ForgotPassword;
  
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
    },
    contentView: {
      marginHorizontal: 30,
      marginVertical: 100,
    },
    text1: {
      color: "black",
      fontSize: 30,
      marginBottom:10,
    },
    subtext1: {
      color: "black",
      fontSize: 15,
    },
    subtext2: {
        color: "black",
        fontSize: 15,
        marginBottom:20,
      },
    buttonView: {
      width: "78%",
      marginBottom: 150,
      marginTop: 10,
      paddingLeft: 170,
    },
    bottomView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 70,
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
    forgotPassword:{
      color: yellow,
      fontWeight: "bold",
      fontSize: 16,
      marginLeft:190,
      marginBottom:20,
    }
  });
  