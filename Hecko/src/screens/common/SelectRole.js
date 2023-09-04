import { useState, useContext, useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ROLE_CLIENT,
  ROLE_VENDOR,
  STORAGE_USERROLE,
} from "../../common/constants";
import StandardButton from "../../controls/buttons/StandardButton";
import RoleView from "../../controls/images/RoleView";
import ScreenBackground from "../../controls/layout/ScreenBackground";
import ScreenHeaderText from "../../controls/texts/ScreenHeaderText";
import { AuthContext } from "../../store/AuthContextProvider";
import { getLangObject } from "../../utils/LanguageUtil";
import ErrorText from "../../controls/texts/ErrorText";
import AuthService from "../../services/AuthService";

function SelectRole({ navigation, route }) {
  const authCtx = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState(ROLE_CLIENT);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function fetchRole() {
      //authCtx.logout();
      const userRole = await AsyncStorage.getItem(STORAGE_USERROLE);
      if (userRole) {
        authCtx.setUserRole(userRole);

        if (
          authCtx.isAuthenticated &&
          authCtx.userRole === ROLE_VENDOR &&
          !authCtx.isVendorSetupDone
        ) {
          navigation.navigate("EditVendorNameAndLocation", { isSignup: true });
        }
      }
    }

    fetchRole();
  }, []);

  function roleSelected(role) {
    setSelectedRole(role);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (selectedRole) {
      setIsLoading(true);

      var roles = [];
      roles.push(selectedRole);

      const requestData = {
        roles: roles,
      };
      AuthService.doSignupGenerateOTP(requestData)
        .then((response) => {
          setIsLoading(false);
          authCtx.setUserRole(selectedRole);
          if (selectedRole === ROLE_CLIENT) {
          } else {
            navigation.navigate("EditVendorNameAndLocation", {
              isSignup: true,
            });
          }
        })
        .catch((error) => {
          setIsLoading(false);
          let newError = { otp: error.message.description };
          setErrors({ ...errors, ...newError });
        });
    } else {
      let newError = { role: "please select how you want to login" };
      setErrors({ ...errors, ...newError });
    }
  }

  return (
    <ScreenBackground>
      <View style={styles.container}>
        <View style={styles.description}>
          <ScreenHeaderText headerLevel={4}>
            {getLangObject().General.signInAsDescription}
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

        <View style={styles.error}>
          {errors.role && <ErrorText>{errors.role}</ErrorText>}
        </View>

        <View style={styles.submitButton}>
          <StandardButton onPress={submitHandler}>Submit</StandardButton>
        </View>
        <ScreenHeaderText style={{ marginTop: 30 }} headerLevel={4}>
          {getLangObject().General.clientRoleDefinition}
        </ScreenHeaderText>
        <ScreenHeaderText style={{ marginTop: 5 }} headerLevel={4}>
          {getLangObject().General.vendorRoleDefinition}
        </ScreenHeaderText>
      </View>
    </ScreenBackground>
  );
}

export default SelectRole;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  error: {
    alignItems: "center",
    marginTop: 4,
  },
});
