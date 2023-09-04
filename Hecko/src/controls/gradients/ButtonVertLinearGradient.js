import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function ButtonVertLinearGradient({ children }) {
  return (
    <View>
      <LinearGradient
        colors={[
          GlobalColors.primaryButton.dark,
          GlobalColors.primaryButton.light,
        ]}
        style={styles.linearGradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

export default ButtonVertLinearGradient;

const styles = StyleSheet.create({
  linearGradient: {
    paddingRight: GlobalSizes.primaryButton.paddingRight,
    paddingLeft: GlobalSizes.primaryButton.paddingLeft,
    paddingVertical: GlobalSizes.primaryButton.paddingVertical,
    borderRadius: GlobalSizes.primaryButton.radius,
    borderColor: GlobalColors.primaryButton.dark,
    borderWidth: GlobalSizes.primaryButton.borderWidth,
  },
});
