import { StyleSheet, Text, View, Image } from "react-native";
import BikeImage from "../assets/images/tempImages/bike1.png";
import VendorProfileImage from "../controls/images/VendorProfileImage";
import VendorDetails from "../controls/vendorProfile/VendorDetails";

function VendorProfileOverview({ children, onPress }) {
  return (
    <View>
      <VendorProfileImage image={BikeImage} />
      <VendorDetails />
    </View>
  );
}

export default VendorProfileOverview;

const styles = StyleSheet.create({});
