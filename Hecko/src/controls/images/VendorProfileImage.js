import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";

function VendorProfileImage({ children, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
    </View>
  )
}
export default VendorProfileImage;

const styles = StyleSheet.create({
    container: {
        height:150,
        paddingHorizontal:140,
        justifyContent: "center",
      },
      imageStyle: {
        height:100,
        width:100,
        resizeMode:"contain",
      },
})