import { Pressable, StyleSheet, TextInput, Text, View } from "react-native";
import {
  adjustHeight,
  adjustPadding,
  adjustWidth,
} from "../../common/AdjustSize";
import { GlobalColors } from "../../common/colors";
import { GlobalSizes } from "../../common/sizes";
import StandardInput from "../../controls/inputs/StandardInput";

function ChangePassword(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <StandardInput
        label="Enter Password"
        viewStyle={{ marginTop: 8, width: "100%" }}
      />

      <StandardInput
        label="Confirm Password"
        viewStyle={{ marginTop: 8, width: "100%" }}
      />
    </View>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {},
});
