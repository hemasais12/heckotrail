import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalSizes } from "../../common/sizes";

function ReviewTitleText({ children }) {
  return (
    <View style={styles.container}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.boxTitle}>
        {children}
      </Text>
    </View>
  );
}

export default ReviewTitleText;

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
