import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";
import { GlobalFonts } from "../../common/fonts";

function PrimaryButtonText({ children }) {
  return (
    <View style={styles.textcontainer}>
      <Text style={styles.buttonText}>
        {children} {"  "}
      </Text>
      <Text style={styles.buttonArrow}> →</Text>
    </View>
  );
}

export default PrimaryButtonText;

const styles = StyleSheet.create({
  textcontainer: {
    flexDirection: "row",
  },

  buttonText: {
    color: GlobalColors.primaryButton.text,
    textAlign: "center",
    fontWeight: GlobalFonts.primaryButton.fontWeight,
  },

  buttonArrow: {
    color: GlobalColors.primaryButton.text,
    textAlign: "left",
  },
});
