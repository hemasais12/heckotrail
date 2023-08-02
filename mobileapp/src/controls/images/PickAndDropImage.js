import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import PickAndDropImg from "../../assets/images/pickanddrop.png";

function PickAndDropImage({ children, source }) {
  return (
    <View>
      <Image source={PickAndDropImg} style={styles.image} />
    </View>
  );
}

export default PickAndDropImage;

const styles = StyleSheet.create({
  image: {
    width: GlobalSizes.orderView.pickAndDropImg,
    height: GlobalSizes.orderView.pickAndDropImg,
    marginTop: -15,
  },
});
