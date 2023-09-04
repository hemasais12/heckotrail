import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import VendorAddress from "./VendorAddress";
import VendorBooking from "./VendorBooking";
import VendorContact from "./VendorContact";
import VendorFee from "./VendorFee";
import VendorNameDetails from "./VendorNameDetails";
import VendorOverview from "./VendorOverview";
import VendorReviews from "./VendorReviews";

function VendorDetails() {
  return (
    <View style={styles.container}>
      <VendorNameDetails
        name={"S. Hemasai"}
        shopName={"Tvs Bike showroom"}
        experience={"3 years with all services"}
        timings={"10:00 AM to 7:00 PM"}
      />
      <VendorAddress
        address={"Address"}
        fullAddress={"Manyata Tech Park, Nagawara"}
      />
      <VendorReviews />
      <VendorOverview
        content={
          "xyz vendor is a bike specalist in all the types of services and will be done very fast and also pick up and drop option available with a less cost............"
        }
      />
      <VendorContact />
      <VendorFee 
        price={"800$"}
      />
      <VendorBooking/>
    </View>
  );
}
export default VendorDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor:GlobalColors.vendorProfile.backgroundColor,
    // shadowColor:"green",
    // shadowOffset:{
    //     width:0,
    //     height:-10,
    // },
    // shadowOpacity:0.9,
    // shadowRadius:16,
    // elevation:60,
    paddingHorizontal:GlobalSizes.vendorProfile.paddingHorizontal,
  },
});
