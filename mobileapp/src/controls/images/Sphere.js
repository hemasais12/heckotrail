import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function Sphere({ size, style }) {
  return (
    <Image
      source={require("../../assets/images/bigbubble.png")}
      style={{ ...styles.image, width: size, height: size, ...style }}
    />
  );
}

export default Sphere;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
  },
});
