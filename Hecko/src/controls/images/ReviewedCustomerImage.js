import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function ReviewedCustomerImage({ children, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
    </View>
  )
}
export default ReviewedCustomerImage;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
      },
      imageStyle: {
        resizeMode: "contain",
        borderRadius: GlobalSizes.orderView.radius - 1,
      },
})