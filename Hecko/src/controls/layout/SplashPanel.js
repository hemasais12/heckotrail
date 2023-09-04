import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import { GlobalColors } from "../../common/colors";

function SplashPanel({ isLoading = false }) {
  return (
    <>
      {isLoading && (
        <Modal transparent={true} visible={isLoading}>
          <View style={styles.container}>
            <ActivityIndicator
              size="large"
              color={GlobalColors.app.activityColor}
            />
          </View>
        </Modal>
      )}
    </>
  );
}

export default SplashPanel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
