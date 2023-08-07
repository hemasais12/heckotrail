import { Pressable, StyleSheet, Text, View } from "react-native";
import Link from "../controls/buttons/Link";
import NormalText from "../controls/texts/NormalText";

function TextLink({ children, linkText, onLinkClick }) {
  return (
    <View style={styles.mainContainer}>
      <NormalText>{children}</NormalText>
      <View style={styles.linkText}>
        <Link>{linkText}</Link>
      </View>
    </View>
  );
}

export default TextLink;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  linkText: {
    marginLeft: 4,
  },
});
