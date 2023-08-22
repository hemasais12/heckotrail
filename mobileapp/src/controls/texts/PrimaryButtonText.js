import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalFonts } from "../../common/fonts";

function PrimaryButtonText({ children }) {
  return (
    <View style={styles.textcontainer}>
      <Text style={styles.buttonText}>{children}</Text>
      <View style={styles.buttonArrowContainer}>
        <Text style={styles.buttonArrow}>→</Text>
      </View>
    </View>
  );
}

export default PrimaryButtonText;

const styles = StyleSheet.create({
  textcontainer: {
    flexDirection: "row",
  },

  buttonText: {
    flexDirection: "row",
    fontWeight: GlobalFonts.primaryButton.fontWeight,
    color: GlobalColors.primaryButton.text,
  },

  buttonArrowContainer: {
    alignItems: "flex-end",
    marginLeft: 8,
  },

  buttonArrow: {
    color: "black",
    color: GlobalColors.primaryButton.text,
  },
});
