import { View, StyleSheet } from "react-native";
import { GlobalColors } from "../../common/colors";
import { useState } from "react";
import CountryDropDown from "./CountryDropDown";
import Input from "./Input";
import { isNumber } from "../../utils/NumberUtil";
import { Zocial } from "@expo/vector-icons";

function PhoneOrEmailInput() {
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [inputId, setInputId] = useState("");

  function inputChangeHandler(text) {
    setInputId(text);
    if (isNumber(text)) {
      setIsEmailEntered(false);
    } else {
      setIsEmailEntered(true);
    }
  }

  function EmailView() {
    return <Zocial name="email" size={24} color={GlobalColors.icons.color} />;
  }

  return (
    <View style={styles.container}>
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
});
