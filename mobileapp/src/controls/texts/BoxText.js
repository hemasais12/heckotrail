import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function BoxText({ children }) {
  return (
    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.container}>
      {children}
    </Text>
  );
}

export default BoxText;

const styles = StyleSheet.create({
  container: {
    color: GlobalColors.boxbar.textColor,
    fontSize: GlobalSizes.orderView.NormalTextFont,
    paddingTop: 3,
  },
});
