import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonHzLinearGradient from '../gradients/ButtonHzLinearGradient'
import ButtonPressable from '../buttons/ButtonPressable'
import { GlobalSizes } from '../../common/sizes'
import { GlobalColors } from '../../common/colors'

export default function VendorBooking() {
  return (
    <View style={styles.container}>
      <ButtonPressable>
        <Text style={styles.buttonText}>Book an appoinment    👉</Text>
      </ButtonPressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:GlobalSizes.vendorProfile.width,
        marginVertical:GlobalSizes.vendorProfile.bookingMarginVertical,
        borderRadius: GlobalSizes.orderView.radius,
        borderWidth: GlobalSizes.primaryButton.borderWidth,
        backgroundColor:GlobalColors.vendorProfile.bookingBackground,
      },
      buttonText:{
        textAlign:"center",
        paddingVertical:GlobalSizes.vendorProfile.paddingVertical,
        height:GlobalSizes.vendorProfile.bookingHeight,
        color:GlobalColors.vendorProfile.text,
      }
})