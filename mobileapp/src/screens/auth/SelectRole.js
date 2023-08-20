import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import { ScreenTextEn } from "../../common/screentexten";
import BaseLayout from "../../controls/layout/BaseLayout";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";

function SelectRole({ navigation, route }) {
  const { isSignup } = route.params;
  console.log("isSignup:" + isSignup);

  return (
    <BaseLayout>
      <View style={styles.mainContainer}>
        <StatusBar hidden={false} />
        <ScreenHeaderText headerLevel={2}>
          {isSignup
            ? ScreenTextEn.General.signUpAs
            : ScreenTextEn.General.signInAs}
        </ScreenHeaderText>
        <View style={styles.description}>
          <ScreenHeaderText headerLevel={4}>
            {isSignup
              ? ScreenTextEn.General.signUpAsDescription
              : ScreenTextEn.General.signInAsDescription}
          </ScreenHeaderText>
        </View>
        <View style={styles.rolesContainer}>
          <View style={styles.role}>
            <Image source={require("../../assets/images/roleclient.png")} />
          </View>
          <View style={styles.role}>
            <Image source={require("../../assets/images/rolevendor.png")} />
          </View>
        </View>
      </View>
    </BaseLayout>
  );
}

export default SelectRole;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  description: {
    marginTop: 10,
  },
  rolesContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },

  role: {
    borderWidth: 1,
    borderColor: GlobalColors.app.borderColor,
    marginHorizontal: 32,
    padding: 8,
    borderRadius: 8,
  },

  roleStyle: {},
});
