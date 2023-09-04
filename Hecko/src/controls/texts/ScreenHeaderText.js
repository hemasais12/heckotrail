import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColors } from "../../common/colors";

function ScreenHeaderText({ children, headerLevel, style }) {
  switch (headerLevel) {
    case 1:
      return <Text style={{ ...styles.header1, ...style }}>{children}</Text>;
    case 2:
      return <Text style={{ ...styles.header2, ...style }}>{children}</Text>;
    case 3:
      return <Text style={{ ...styles.header3, ...style }}>{children}</Text>;
    case 4:
      return <Text style={{ ...styles.header4, ...style }}>{children}</Text>;
    case 5:
      return <Text style={{ ...styles.header5, ...style }}>{children}</Text>;
  }
  return <Text style={{ ...styles.header, ...style }}>{children}</Text>;
}

export default ScreenHeaderText;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: GlobalColors.page.titleColor2,
  },
  header1: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalColors.page.titleColor2,
  },
  header2: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalColors.page.titleColor2,
  },
  header3: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalColors.page.titleColor2,
  },
  header4: {
    fontSize: 14,
    color: GlobalColors.page.titleColor2,
  },
  header5: {
    fontSize: 12,
    color: GlobalColors.page.titleColor2,
  },
});
