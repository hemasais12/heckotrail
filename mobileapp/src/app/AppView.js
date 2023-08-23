import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet, View, Dimensions, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginId from "../screens/auth/LoginId";
import Empty from "../screens/auth/Empty";
import LoginByPassword from "../screens/auth/LoginByPassword";

import ConfirmOTP from "../screens/auth/ConfirmOTP";
import SignupPasswordAndOTP from "../screens/auth/SignupPasswordAndOTP";
import SelectRole from "../screens/common/SelectRole";
import WelcomeScreen from "../screens/common/WelcomeScreen";

import AuthContextProvider, { AuthContext } from "../store/AuthContextProvider";
import IconButton from "../controls/buttons/IconButton";
import { GlobalSizes } from "../common/sizes";
import { GlobalColors } from "../common/colors";
import { ROLE_CLIENT, ROLE_VENDOR, STORAGE_TOKEN } from "../common/constants";
import EditableVendorProfile from "../screens/vendor/EditableVendorProfile";
import EditVendorNameAndLocation from "../screens/vendor/EditVendorNameAndLocation";

const Stack = createNativeStackNavigator();

const screen = Dimensions.get("screen");

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginId"
        component={LoginId}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="LoginByPassword"
        component={LoginByPassword}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ConfirmOTP"
        component={ConfirmOTP}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SignupPasswordAndOTP"
        component={SignupPasswordAndOTP}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Empty" component={Empty} options={{ title: "" }} />
    </Stack.Navigator>
  );
}

function AuthenticatedClientStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function UserRoleStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="SelectRole"
        component={SelectRole}
        options={{
          title: "Confirm role",
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditVendorNameAndLocation"
        component={EditVendorNameAndLocation}
        options={{
          title: "Vendor/Shop details",
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedVendorStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  /*console.log("authCtx.isAuthenticated:" + authCtx.isAuthenticated);
  console.log("authCtx.userRole not set:" + !authCtx.userRole);
  console.log("authCtx.userRole:" + authCtx.userRole);
  console.log(
    "authCtx.isVendorSetupDone not set:" + !authCtx.isVendorSetupDone
  );*/

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && !authCtx.userRole && <UserRoleStack />}
      {authCtx.isAuthenticated && authCtx.userRole === ROLE_CLIENT && (
        <AuthenticatedClientStack />
      )}
      {authCtx.isAuthenticated &&
        authCtx.userRole === ROLE_VENDOR &&
        !authCtx.isVendorSetupDone && <UserRoleStack />}
      {authCtx.isAuthenticated &&
        authCtx.userRole === ROLE_VENDOR &&
        authCtx.isVendorSetupDone && <AuthenticatedVendorStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      //authCtx.logout();
      const storedToken = await AsyncStorage.getItem(STORAGE_TOKEN);

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    // setIsTryingLogin(false);
    // authCtx.authenticate("storedToken");
    // authCtx.setUserRole(ROLE_VENDOR);
    //authCtx.logout();

    fetchToken();
  }, []);

  if (isTryingLogin) {
    //console.log("I am here");
    return <Text>Loading</Text>;
  } else {
    //console.log("I am not here");
  }

  return <Navigation />;
}

function AppView() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </View>
  );
}
export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
