import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { GlobalColors } from "../../common/colors";
import { ROLE_CLIENT, ROLE_VENDOR } from "../../common/constants";
import { ScreenTextEn } from "../../common/screentexten";
import RoundedButton from "../../controls/buttons/RoundedButton";
import RoleView from "../../controls/images/RoleView";
import BaseLayout from "../../controls/layout/BaseLayout";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";

function SelectRole({ navigation, route }) {
  const [selectedRole, setSelectedRole] = useState("");
  const { isSignup } = route.params;

  function roleSelected(role) {
    setSelectedRole(role);
  }

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
          <RoleView
            role={ROLE_CLIENT}
            isSelected={selectedRole === ROLE_CLIENT}
            onPress={roleSelected}
          />
          <RoleView
            role={ROLE_VENDOR}
            isSelected={selectedRole === ROLE_VENDOR}
            onPress={roleSelected}
          />
        </View>

        <View style={styles.submitButton}>
          <RoundedButton>Submit</RoundedButton>
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
    marginTop: 20,
  },
  submitButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
