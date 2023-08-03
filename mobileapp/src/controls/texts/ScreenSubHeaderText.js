import { Pressable, StyleSheet, Text, View } from "react-native";

function ScreenSubHeaderText({ children }) {
  return <Text style={styles.subHeader}>{children}</Text>;
}

export default ScreenSubHeaderText;

const styles = StyleSheet.create({
  subHeader:{
    fontSize:16,
  }  
})
