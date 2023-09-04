import { StyleSheet, Text, View } from 'react-native';
import Map from '../../common/Map';
import { GlobalSizes } from "../../common/sizes";
import NormalText from '../texts/NormalText';
import ReviewsText from '../texts/ReviewsText';

function VendorAddress({address,fullAddress}) {
  return (
    <View style={styles.container}>
      <ReviewsText>{address}</ReviewsText>
      <NormalText>{fullAddress}</NormalText>
      <Map/>
      {/* <NormalText>Add Map View here!!!!!!!!!!!</NormalText> */}
    </View>
  )
}
export default VendorAddress;

const styles = StyleSheet.create({
    container: {
        width:GlobalSizes.vendorProfile.width,
        marginVertical:GlobalSizes.vendorProfile.marginVertical,
        height:"22%",
      },
})