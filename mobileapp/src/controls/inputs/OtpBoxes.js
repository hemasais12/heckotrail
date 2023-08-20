import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect, useRef } from "react";
import { OTP_LENGTH } from "../../common/constants";
import OtpBox from "./OtpBox";
import RoundedButton from "../buttons/RoundedButton";
import ErrorText from "../texts/ErrorText";

function OtpBoxes({ onSubmit, errorText }) {
  const [showError, setShowError] = useState(false);
  const otpBoxesArr = [];

  function submitHandler() {
    let otp = makeOtp();
    if (otp.length === OTP_LENGTH) {
      onSubmit(otp);
    } else {
      setShowError(true);
    }
  }

  function makeOtp() {
    let otp = "";
    for (let i = 0; i < OTP_LENGTH; i++) {
      otp = otp + otpBoxesArr[i].value.trim();
    }
    return otp;
  }

  function otpChangeHandler(newInput, index, nextOtpBoxRef) {
    //setShowError(false);
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
        //  value={boxInfo.value}
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
      <View style={styles.errorMessage}>
        {showError ? <ErrorText>{errorText}</ErrorText> : <></>}
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
    marginTop: 18,
    justifyContent: "flex-end",
    marginRight: 18,
  },
  errorMessage: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "center",
  },
});
