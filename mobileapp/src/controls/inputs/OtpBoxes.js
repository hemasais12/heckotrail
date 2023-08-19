import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import { OTP_LENGTH } from "../../common/constants";
import OtpBox from "./OtpBox";
import RoundedButton from "../buttons/RoundedButton";

function OtpBoxes({ onSubmit }) {
  const otpBoxesArr = [];

  function submitHandler() {
    onSubmit(makeOtp());
  }

  function makeOtp() {
    let otp = "";
    for (let i = 0; i < OTP_LENGTH; i++) {
      otp = otp + otpBoxesArr[i].value.trim();
    }
    return otp;
  }

  function otpChangeHandler(newInput, index, nextOtpBoxRef) {
    otpBoxesArr[index].value = newInput;
    if (nextOtpBoxRef && newInput.length > 0) nextOtpBoxRef.current.focus();
  }

  function OTPBoxes() {
    let otpBoxRef = useRef();
    let nextOtpBoxRef = null;
    for (let i = 0; i < OTP_LENGTH; i++) {
      if (i < OTP_LENGTH - 1) {
        nextOtpBoxRef = useRef();
      } else {
        nextOtpBoxRef = null;
      }
      otpBoxesArr.push({
        index: i,
        value: "",
        otpBoxRef: otpBoxRef,
        nextOtpBoxRef: nextOtpBoxRef,
      });
      otpBoxRef = nextOtpBoxRef;
    }
    let boxesArr = otpBoxesArr.map((boxInfo) => (
      <OtpBox
        key={boxInfo.index}
        index={boxInfo.index}
        onPress={otpChangeHandler}
        otpBoxRef={boxInfo.otpBoxRef}
        nextOtpBoxRef={boxInfo.nextOtpBoxRef}
      />
    ));
    return boxesArr;
  }

  return (
    <View style={styles.container}>
      <View style={styles.otpBoxes}>
        <OTPBoxes />
      </View>
      <View style={styles.submitButton}>
        <RoundedButton onPress={submitHandler}>Submit</RoundedButton>
      </View>
    </View>
  );
}

export default OtpBoxes;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  otpBoxes: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  submitButton: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "flex-end",
    marginRight: 18,
  },
});
