import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenSubHeaderText from '../texts/ScreenSubHeaderText';
import NormalText from '../texts/NormalText';
import { GlobalSizes } from '../../common/sizes';

function VendorFee({price}) {
  return (
    <View style={styles.container}>
      <ScreenSubHeaderText>Vendor fee</ScreenSubHeaderText>
      <NormalText>{price}</NormalText>
    </View>
  )
}
export default VendorFee;

const styles = StyleSheet.create({
    container: {
        width:GlobalSizes.vendorProfile.width,
        marginVertical: GlobalSizes.vendorProfile.marginVertical,
        flexDirection:"row",
        justifyContent:"space-between"
      },
})