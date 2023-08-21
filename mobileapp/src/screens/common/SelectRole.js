import { useState, useContext } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { ROLE_CLIENT, ROLE_VENDOR } from "../../common/constants";
import { ScreenTextEn } from "../../common/screentexten";
import RoundedButton from "../../controls/buttons/RoundedButton";
import RoleView from "../../controls/images/RoleView";
import LogoBackground from "../../controls/layout/LogoBackground";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import { AuthContext } from "../../store/AuthContextProvider";

function SelectRole({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState(ROLE_CLIENT);

  function roleSelected(role) {
    setSelectedRole(role);
  }

  function submitHandler() {
    if (selectedRole) {
      authCtx.setUserRole(selectedRole);
    }
  }

  return (
    <LogoBackground>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.topcontainer}></View>
        <View style={styles.middlecontainer}>
          <ScreenHeaderText headerLevel={2}>
            {ScreenTextEn.General.signInAs}
          </ScreenHeaderText>
          <View style={styles.description}>
            <ScreenHeaderText headerLevel={4}>
              {ScreenTextEn.General.signInAsDescription}
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
            <RoundedButton onPress={submitHandler}>Submit</RoundedButton>
          </View>
        </View>
        <View style={styles.bottomcontainer}></View>
      </View>
    </LogoBackground>
  );
}

export default SelectRole;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  topcontainer: {
    flex: 1,
    justifyContent: "center",
  },
  middlecontainer: {
    flex: 3,
    justifyContent: "center",
  },
  bottomcontainer: {
    flex: 2,
    justifyContent: "center",
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
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
