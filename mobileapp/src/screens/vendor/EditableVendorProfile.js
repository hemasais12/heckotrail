import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScreenTextEn } from "../../common/screentexten";
import IoniconInput from "../../controls/inputs/IoniconInput";
import ScreenBackground from "../../controls/layout/ScreenBackground";

function EditableVendorProfile({ children }) {
  return (
    <ScreenBackground>
      <View style={styles.container}>
        <IoniconInput
          ioniconprops={{ name: "person-outline", size: 20 }}
          inputprops={{ placeholder: ScreenTextEn.VendorProfile.name }}
        />
      </View>
    </ScreenBackground>
  );
}

export default EditableVendorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
