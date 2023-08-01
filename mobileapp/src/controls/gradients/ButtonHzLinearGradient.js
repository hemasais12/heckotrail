import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";

function ButtonHzLinearGradient({ children }) {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          GlobalColors.primaryButton.light,
          GlobalColors.primaryButton.dark,
        ]}
        style={styles.linearGradient}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

export default ButtonHzLinearGradient;

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
