import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalSizes } from "../../common/sizes";
import ReviewsSummaryText from '../texts/ReviewsSummaryText';
import ReviewsText from '../texts/ReviewsText';

function VendorOverview({content}) {
  return (
    <View style={styles.container}>
      <ReviewsText>Vendor Details</ReviewsText>
      <ReviewsSummaryText>{content}</ReviewsSummaryText>
    </View>
  )
}
export default VendorOverview;

const styles = StyleSheet.create({
    container: {
        width:GlobalSizes.vendorProfile.width,
        marginVertical:GlobalSizes.vendorProfile.marginVertical,
      },
})