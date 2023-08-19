import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet, View, Dimensions, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginId from "../screens/auth/LoginId";
import LoginByPassword from "../screens/auth/LoginByPassword";

import ConfirmOTP from "../screens/auth/ConfirmOTP";
import SignupPasswordAndOTP from "../screens/auth/SignupPasswordAndOTP";
import SelectRole from "../screens/auth/SelectRole";
import WelcomeScreen from "../screens/common/WelcomeScreen";

import AuthContextProvider, { AuthContext } from "../store/AuthContextProvider";
import IconButton from "../controls/buttons/IconButton";
import { GlobalSizes } from "../common/sizes";
import { GlobalColors } from "../common/colors";

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
        options={{ title: "" }}
      />
      <Stack.Screen
        screenOptions={{ headerShown: true }}
        name="ConfirmOTP"
        component={ConfirmOTP}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="SignupPasswordAndOTP"
        component={SignupPasswordAndOTP}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="SelectRole"
        component={SelectRole}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
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
  console.log("authCtx.isAuthenticated:" + authCtx.isAuthenticated);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    console.log("I am here");
    return <Text>Loading</Text>;
  } else {
    console.log("I am not here");
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
