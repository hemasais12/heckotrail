import { StyleSheet, View } from "react-native";
import { GlobalSizes } from "../../common/sizes";
import PhoneOrEmailInput from "../../controls/inputs/PhoneOrEmailInput";

function InputId() {
  return (
    <View style={styles.container}>
      <PhoneOrEmailInput />
    </View>
  );
}

export default InputId;

const styles = StyleSheet.create({
  container: {
    padding: GlobalSizes.app.padding,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingBottom: 200,
  },
  input: {
    flexDirection: "row",
  },
});
