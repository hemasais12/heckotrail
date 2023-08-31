import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import { OTP_LENGTH } from "../../common/constants";
import OtpBox from "./OtpBox";
import StandardButton from "../buttons/StandardButton";
import ErrorText from "../texts/ErrorText";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function OtpBoxes({ onOTPChange, error }) {
  const otpBoxRefs = new Array(OTP_LENGTH).fill(null);
  const otpBoxesArr = new Array(OTP_LENGTH).fill(null);

  //TODO: Can we do at declare place itself .. at above?
  for (let i = 0; i < OTP_LENGTH; i++) {
    otpBoxRefs[i] = useRef(null);
  }

  useEffect(() => {
    //Runs only on the first render
  }, []);

  function makeOtp() {
    let otp = "";
    for (let i = 0; i < OTP_LENGTH; i++) {
      if (otpBoxesArr[i]) otp = otp + otpBoxesArr[i].trim();
    }
    return otp;
  }

  function otpChangeHandler(index, newInput) {
    otpBoxesArr[index] = newInput;

    if (index < OTP_LENGTH - 1) otpBoxRefs[index + 1].current.focus();
    let otp = makeOtp();
    onOTPChange(otp);
  }

  return (
    <View style={styles.container}>
      <View style={styles.otpBoxes}>
        {[...Array(OTP_LENGTH)].map((x, i) => (
          <OtpBox
            key={i}
            index={i}
            otpChangeHandler={otpChangeHandler}
            inputRef={otpBoxRefs[i]}
          />
        ))}
      </View>
      <View style={styles.error}>
        {error && <ErrorText>{error}</ErrorText>}
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
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  error: {
    alignItems: "center",
    marginTop: 4,
  },
});
