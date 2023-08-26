import { View, StyleSheet, Text } from "react-native";
import { GlobalColors } from "../../common/colors";
import { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import Input from "./Input";
import { isNumber } from "../../utils/NumberUtil";
import { Zocial } from "@expo/vector-icons";
import { GlobalSizes } from "../../common/sizes";

function PhoneOrEmailInput({ viewStyle, onChangeText }) {
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [inputId, setInputId] = useState("");

  function inputChangeHandler(text) {
    setInputId(text);
    if (isNumber(text)) {
      setIsEmailEntered(false);
    } else {
      setIsEmailEntered(true);
    }
    onChangeText(text);
  }

  function EmailView() {
    return (
      <View style={styles.emailContainer}>
        <Zocial name="email" size={24} color={GlobalColors.icons.color} />
      </View>
    );
  }

  return (
    <View style={{ ...styles.container, ...viewStyle }}>
      {isEmailEntered ? <EmailView /> : <CountryDropDown />}

      <View style={styles.input}>
        <Input
          onUpdateValue={inputChangeHandler}
          placeHolder="Mobile number or Email"
        />
      </View>
    </View>
  );
}

export default PhoneOrEmailInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  emailContainer: {
    flexDirection: "row",
    backgroundColor: GlobalColors.input.textBGColor,
    borderColor: GlobalColors.input.borderColor,
    borderWidth: GlobalSizes.input.borderWidth,
    borderRadius: GlobalSizes.input.borderRadius,
    paddingLeft: GlobalSizes.input.paddingLeft,
    paddingRight: GlobalSizes.input.paddingRight,
    padding: 2,
    justifyContent: "flex-end",
    marginLeft: 60,
  },
});
