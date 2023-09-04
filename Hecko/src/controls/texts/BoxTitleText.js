import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import PickAndDropImage from "../images/PickAndDropImage";

function BoxTitleText({ children }) {
  return (
    <View style={styles.container}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.boxTitle}>
        {children}
      </Text>
      <PickAndDropImage />
    </View>
  );
}

export default BoxTitleText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  boxTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: GlobalSizes.orderView.titleFontSize,
  },
});
