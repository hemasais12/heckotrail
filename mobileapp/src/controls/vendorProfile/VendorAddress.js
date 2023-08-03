import { StyleSheet, Text, View } from 'react-native';
import { GlobalSizes } from "../../common/sizes";
import NormalText from '../texts/NormalText';
import ReviewsText from '../texts/ReviewsText';

function VendorAddress({address,fullAddress}) {
  return (
    <View style={styles.container}>
      <ReviewsText>{address}</ReviewsText>
      <NormalText>{fullAddress}</NormalText>
      <NormalText>Add Map View here!!!!!!!!!!!</NormalText>
    </View>
  )
}
export default VendorAddress;

const styles = StyleSheet.create({
    container: {
        width:GlobalSizes.vendorProfile.width,
        marginVertical:GlobalSizes.vendorProfile.marginVertical,
        height:"22%", // to be removed after maps added
      },
})