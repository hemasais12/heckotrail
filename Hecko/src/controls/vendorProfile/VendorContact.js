import { StyleSheet, Text, View } from "react-native";
import ButtonPressable from "../buttons/ButtonPressable";
import React from "react";
import { GlobalSizes } from "../../common/sizes";
import { GlobalColors } from "../../common/colors";

function VendorContact() {
  return (
    <View style={styles.container}>
      <ButtonPressable>
        <Text style={styles.msgButton}>Message</Text>
      </ButtonPressable>

      <ButtonPressable>
        <Text style={styles.acButton}>Audio Call</Text>
      </ButtonPressable>

      <ButtonPressable>
        <Text style={styles.vcButton}>Video Call</Text>
      </ButtonPressable>
    </View>
  );
}
export default VendorContact;

const styles = StyleSheet.create({
  container: {
    width:GlobalSizes.vendorProfile.width,
    marginVertical: GlobalSizes.vendorProfile.marginVertical,
    flexDirection:"row",
  },

  msgButton: {
    borderWidth:GlobalSizes.vendorProfile.borderWidth,
    textAlign: "center",
    borderRadius: GlobalSizes.vendorProfile.borderRadius,
    height: GlobalSizes.vendorProfile.height,
    width:GlobalSizes.vendorProfile.contactWidth,
    paddingVertical:GlobalSizes.vendorProfile.ContactpaddingVertical,
    backgroundColor:GlobalColors.vendorProfile.violetcolor,
  },
  acButton: {
    borderWidth: GlobalSizes.vendorProfile.borderWidth,
    textAlign: "center",
    borderRadius: GlobalSizes.vendorProfile.borderRadius,
    height: GlobalSizes.vendorProfile.height,
    width:GlobalSizes.vendorProfile.contactWidth,
    paddingVertical:GlobalSizes.vendorProfile.ContactpaddingVertical,
    backgroundColor:GlobalColors.vendorProfile.skyblue,
  },
  vcButton: {
    borderWidth: GlobalSizes.vendorProfile.borderWidth,
    textAlign: "center",
    borderRadius: GlobalSizes.vendorProfile.borderRadius,
    height: GlobalSizes.vendorProfile.height,
    width:GlobalSizes.vendorProfile.contactWidth,
    paddingVertical:GlobalSizes.vendorProfile.ContactpaddingVertical,
    backgroundColor:GlobalColors.vendorProfile.orange,
  },
});
