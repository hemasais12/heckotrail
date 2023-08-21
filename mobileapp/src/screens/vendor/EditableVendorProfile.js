import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GlobalColors } from "../../common/colors";
import { ScreenTextEn } from "../../common/screentexten";
import IoniconInput from "../../controls/inputs/IoniconInput";
import ScreenBackground from "../../controls/layout/ScreenBackground";

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
});
