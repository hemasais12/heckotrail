import { StyleSheet, View } from "react-native";
import Bubble from "./Bubble";

function Bubbles() {
  return (
    <View style={styles.bubbles}>
      <Bubble size={70} marginLeft={0} marginTop={0} borderWidth={4} />
      <Bubble size={45} marginLeft={30} marginTop={75} borderWidth={2} />
      <Bubble size={55} marginLeft={15} marginTop={130} borderWidth={3} />
      <Bubble size={65} marginLeft={95} marginTop={40} borderWidth={4} />
      <Bubble size={45} marginLeft={145} marginTop={120} borderWidth={2} />
      <Bubble size={45} marginLeft={145} marginTop={120} borderWidth={2} />
      <Bubble size={55} marginLeft={85} marginTop={130} borderWidth={3} />
      <Bubble size={55} marginLeft={195} marginTop={130} borderWidth={3} />
      <Bubble size={55} marginLeft={135} marginTop={180} borderWidth={3} />
      <Bubble size={55} marginLeft={175} marginTop={60} borderWidth={3} />
    </View>
  );
}

export default Bubbles;

const styles = StyleSheet.create({
  bubbles: {
    width: 200,
    height: 200,
  },
});
