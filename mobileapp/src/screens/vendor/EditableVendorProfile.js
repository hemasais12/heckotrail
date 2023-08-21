import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GlobalColors } from "../../common/colors";
import { ScreenTextEn } from "../../common/screentexten";
import CustomPressable from "../../controls/commons/CustomPressable";
import IoniconInput from "../../controls/inputs/IoniconInput";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import NormalText from "../../controls/texts/NormalText";

function EditableVendorProfile({ children }) {
  const inputsArr = [
    {
      name: "user",
      ioniconType: "AntDesign",
      placeholder: ScreenTextEn.VendorProfile.name,
    },
    {
      name: "mobile1",
      ioniconType: "AntDesign",
      placeholder: ScreenTextEn.General.contactNumber,
    },
    {
      name: "address",
      ioniconType: "Entypo",
      placeholder: ScreenTextEn.General.addressLine1,
    },
    {
      name: "address",
      ioniconType: "Entypo",
      placeholder: ScreenTextEn.General.addressLine2,
    },
    {
      name: "address",
      ioniconType: "Entypo",
      placeholder: ScreenTextEn.General.addressLine3,
    },
    {
      name: "location-city",
      ioniconType: "MaterialIcons",
      placeholder: ScreenTextEn.General.city,
    },
    {
      name: "location-outline",
      ioniconType: "Ionicons",
      placeholder: ScreenTextEn.General.state,
    },
    {
      name: "map-pin",
      ioniconType: "FontAwesome",
      placeholder: ScreenTextEn.General.pinCode,
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
          <Text> {ScreenTextEn.VendorProfile.editScreenTitle}</Text>
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
