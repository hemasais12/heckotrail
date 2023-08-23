import { StatusBar } from "expo-status-bar";
import { StyleSheet, Modal, Button, View } from "react-native";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import NormalText from "../../controls/texts/NormalText";

function EditVendorAddress(props) {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <NormalText>Model screen</NormalText>
          <Button title="Close" onPress={props.onClose} />
        </View>
      </View>
    </Modal>
  );
}

export default EditVendorAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    transparent: true,
    justifyContent: "flex-end",
  },
  modal: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 4,
  },
});
