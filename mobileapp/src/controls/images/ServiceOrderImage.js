import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import BikeImage from "../../assets/images/tempImages/bike1.png";

function ServiceOrderImage({ children, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
    </View>
  );
}

export default ServiceOrderImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: GlobalColors.boxbar.imageBgColor,
  },
  imageStyle: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: GlobalSizes.orderView.radius - 1,
  },
});
