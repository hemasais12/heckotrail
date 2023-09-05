import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GlobalColors } from "../../common/colors";
import CustomPressable from "../../controls/commons/CustomPressable";
import IoniconInput from "../../controls/inputs/IoniconInput";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import NormalText from "../../controls/texts/NormalText";
import { getLangObject } from "../../utils/LanguageUtil";

function EditableVendorProfile({ children }) {
  const inputsArr = [
    {
      name: "user",
      ioniconType: "AntDesign",
      placeholder: getLangObject().VendorProfile.name,
    },
    {
      name: "mobile1",
      ioniconType: "AntDesign",
      placeholder: getLangObject().General.contactNumber,
    },
    {
      name: "address",
      ioniconType: "Entypo",
      placeholder: getLangObject().General.addressLine1,
    },
    {
      name: "address",
      ioniconType: "Entypo",
      placeholder: getLangObject().General.addressLine2,
    },
    {
      name: "address",
      ioniconType: "Entypo",
      placeholder: getLangObject().General.addressLine3,
    },
    {
      name: "location-city",
      ioniconType: "MaterialIcons",
      placeholder: getLangObject().General.city,
    },
    {
      name: "location-outline",
      ioniconType: "Ionicons",
      placeholder: getLangObject().General.state,
    },
    {
      name: "map-pin",
      ioniconType: "FontAwesome",
      placeholder: getLangObject().General.pinCode,
    },
  ];

  return (
    <ScreenBackground>
      <KeyboardAwareScrollView
        keyboardAvoidingOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        enabled
      >
        <CustomPressable>
          <View style={styles.location}>
            <View style={styles.imgandtextlocateme}>
              <Image
                style={styles.imglocateme}
                source={require("../../assets/images/locateme.png")}
              />
              <NormalText>Find Me</NormalText>
            </View>
          </View>
        </CustomPressable>

        {inputsArr.map((inputObj, index) => {
          return (
            <IoniconInput
              key={index}
              ioniconprops={{ name: inputObj.name }}
              ioniconType={inputObj.ioniconType}
              inputprops={{ placeholder: inputObj.placeholder }}
            />
          );
        })}

        <View style={styles.screenTitle}>
          <Text> {getLangObject().VendorProfile.editScreenTitle}</Text>
        </View>
      </KeyboardAwareScrollView>
    </ScreenBackground>
  );
}

export default EditableVendorProfile;

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  screenTitle: {
    marginTop: 24,
    color: GlobalColors.page.textColor,
  },
  location: {
    alignItems: "flex-end",
  },
  imgandtextlocateme: {
    alignItems: "center",
  },

  imglocateme: {
    width: 40,
    height: 40,
  },
});
