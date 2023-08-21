import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScreenTextEn } from "../../common/screentexten";
import IoniconInput from "../../controls/inputs/IoniconInput";
import ScreenBackground from "../../controls/layout/ScreenBackground";

function EditableVendorProfile({ children }) {
  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View>
          <Text> Screen Description</Text>
        </View>
        <IoniconInput
          ioniconprops={{ name: "user" }}
          ioniconType="AntDesign"
          inputprops={{ placeholder: ScreenTextEn.VendorProfile.name }}
        />
        <IoniconInput
          ioniconprops={{ name: "mobile1" }}
          ioniconType="AntDesign"
          inputprops={{ placeholder: ScreenTextEn.General.contactNumber }}
        />
        <IoniconInput
          ioniconprops={{ name: "address" }}
          ioniconType="Entypo"
          inputprops={{ placeholder: ScreenTextEn.General.addressLine1 }}
        />
        <IoniconInput
          ioniconprops={{ name: "address" }}
          ioniconType="Entypo"
          inputprops={{ placeholder: ScreenTextEn.General.addressLine2 }}
        />
        <IoniconInput
          ioniconprops={{ name: "address" }}
          ioniconType="Entypo"
          inputprops={{ placeholder: ScreenTextEn.General.addressLine3 }}
        />
        <IoniconInput
          ioniconprops={{ name: "location-city" }}
          ioniconType="MaterialIcons"
          inputprops={{ placeholder: ScreenTextEn.General.city }}
        />
        <IoniconInput
          ioniconprops={{ name: "location-outline" }}
          inputprops={{ placeholder: ScreenTextEn.General.state }}
        />
        <IoniconInput
          ioniconprops={{ name: "map-pin" }}
          ioniconType="FontAwesome"
          inputprops={{ placeholder: ScreenTextEn.General.pinCode }}
        />
      </View>
    </ScreenBackground>
  );
}

export default EditableVendorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
