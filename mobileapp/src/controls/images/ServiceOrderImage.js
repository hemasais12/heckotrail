import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function ServiceOrderImage({ children, source }) {
  return <Image source={source} style={styles.image} />;
}

export default ServiceOrderImage;

const styles = StyleSheet.create({
  image: {
    width: GlobalSizes.orderView.height,
    height: "100%",
    borderRadius: GlobalSizes.orderView.radius - 1,
  },
});
