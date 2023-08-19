import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import { OTP_LENGTH } from "../../common/constants";
import OtpBox from "./OtpBox";

function OtpBoxes({ children }) {
  function otpChangeHandler(newInput, index, nextOtpBoxRef) {
    if (nextOtpBoxRef && newInput.length > 0) nextOtpBoxRef.current.focus();
  }

  function OTPBoxes() {
    let initialArr = [];

    let otpBoxRef = useRef();
    let nextOtpBoxRef = null;
    for (let i = 0; i < OTP_LENGTH; i++) {
      if (i < OTP_LENGTH - 1) {
        nextOtpBoxRef = useRef();
      } else {
        nextOtpBoxRef = null;
      }
      initialArr.push({
        index: i,
        otpBoxRef: otpBoxRef,
        nextOtpBoxRef: nextOtpBoxRef,
      });
      otpBoxRef = nextOtpBoxRef;
    }
    let boxesArr = initialArr.map((info) => (
      <OtpBox
        key={info.index}
        index={info.index}
        onPress={otpChangeHandler}
        otpBoxRef={info.otpBoxRef}
        nextOtpBoxRef={info.nextOtpBoxRef}
      />
    ));
    return boxesArr;
  }

  return (
    <View style={styles.otpBoxes}>
      <OTPBoxes />
    </View>
  );
}

export default OtpBoxes;

const styles = StyleSheet.create({
  otpBoxes: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
});
