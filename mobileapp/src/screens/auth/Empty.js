import { StyleSheet, View, Text } from "react-native";
import LogoBackground from "../../controls/layout/LogoBackground";

function Empty({ route, navigation }) {
  return (
    <LogoBackground>
      <Text>Test</Text>
    </LogoBackground>
  );
}

export default Empty;

const styles = StyleSheet.create({});
