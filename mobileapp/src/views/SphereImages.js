import { StyleSheet, View } from "react-native";
import Sphere from "../controls/images/Sphere";
import Bubble from "./Bubble";

function SphereImages() {
  return (
    <View style={styles.bubbles}>
      <Sphere size={60} style={{ marginLeft: 0, marginTop: 0 }} />
      <Sphere size={35} style={{ marginLeft: 30, marginTop: 75 }} />
      <Sphere size={45} style={{ marginLeft: 15, marginTop: 130 }} />
      <Sphere size={55} style={{ marginLeft: 95, marginTop: 40 }} />
      <Sphere size={35} style={{ marginLeft: 145, marginTop: 120 }} />
      <Sphere size={35} style={{ marginLeft: 145, marginTop: 120 }} />
      <Sphere size={45} style={{ marginLeft: 85, marginTop: 130 }} />
      <Sphere size={45} style={{ marginLeft: 195, marginTop: 130 }} />
      <Sphere size={45} style={{ marginLeft: 135, marginTop: 180 }} />
      <Sphere size={45} style={{ marginLeft: 175, marginTop: 60 }} />
    </View>
  );
}

export default SphereImages;

const styles = StyleSheet.create({
  bubbles: {
    width: 200,
    height: 200,
  },
});
