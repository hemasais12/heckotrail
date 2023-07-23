import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/auth/Login";
import Signup from "./src/auth/Signup";
import Password from "./src/auth/Password";
import OtpScreen from "./src/auth/OtpScreen";
import Home from "./src/Home";
import Vendor from "./src/screens/Vendor";
import Customer from "./src/screens/Customer";
import BikeService from "./src/vendorServiceScreens/BikeService";
import ForgotPassword from "./src/forgotpassword/ForgotPassword";
import EmailOtp from "./src/forgotpassword/EmailOtp";
import ResetPassword from "./src/forgotpassword/ResetPassword";
import CustomerBikeService from "./src/customerScreens/CustomerBikeService";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vendor" component={Vendor} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="BikeService" component={BikeService} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailOtp" component={EmailOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CustomerBikeService" component={CustomerBikeService} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
