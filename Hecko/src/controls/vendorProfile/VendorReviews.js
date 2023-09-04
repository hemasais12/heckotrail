import { StyleSheet, Text, View } from "react-native";
import { GlobalSizes } from "../../common/sizes";
import React from "react";
import BikeImage from "../../assets/images/tempImages/bike1.png";
import ReviewedCustomerImage from "../images/ReviewedCustomerImage";
import ReviewTitleText from "../texts/ReviewTitleText";
import NormalText from "../texts/NormalText";
import ReviewsSummaryText from "../texts/ReviewsSummaryText";
import ReviewsText from "../texts/ReviewsText";
import { GlobalColors } from "../../common/colors";

function VendorReviews() {
  let personOverview = {
    title: "Customer Name",
    review:
      "Customer reviews will be displayed here and can be seen by the vendor....",
    rating: "⭐⭐⭐",
  };

  return (
    <View>
      <ReviewsText>Vendor Reviews</ReviewsText>
      <View style={styles.container}>
        <ReviewedCustomerImage image={BikeImage} />
        <View style={styles.orderDetail}>
          <ReviewTitleText>{personOverview.title}</ReviewTitleText>
          <ReviewsSummaryText>{personOverview.review}</ReviewsSummaryText>
          <View style={styles.ratingView}>
            <NormalText>⭐⭐⭐</NormalText>
            <NormalText>3.0</NormalText>
          </View>
        </View>
      </View>
    </View>
  );
}
export default VendorReviews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width:GlobalSizes.vendorProfile.width,
    borderRadius: GlobalSizes.orderView.radius,
    borderWidth: GlobalSizes.primaryButton.borderWidth,
    borderColor: GlobalColors.vendorProfile.bordercolor,
    marginVertical: GlobalSizes.vendorProfile.marginVertical,
  },
  orderDetail: {
    flex: 1,
    paddingVertical:GlobalSizes.vendorProfile.paddingVertical,
    paddingHorizontal: GlobalSizes.vendorProfile.paddingHorizontal,
  },
  ratingView: {
    flexDirection: "row",
  },
});
