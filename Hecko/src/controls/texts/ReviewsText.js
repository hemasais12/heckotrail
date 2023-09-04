import { Pressable, StyleSheet, Text, View } from "react-native";

function ReviewsText({ children }) {
  return <Text style={styles.header}>{children}</Text>;
}

export default ReviewsText;

const styles = StyleSheet.create({
  header:{
    fontSize:16,
    fontWeight: "bold",
  }  
})