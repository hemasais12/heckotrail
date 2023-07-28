import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/auth/Login";
import Signup from "./src/auth/Signup";
import LoginPassword from "./src/auth/LoginPassword";
import Home from "./src/common/Home";
import Vendor from "./src/screens/Vendor";
import Customer from "./src/screens/Customer";
import BikeService from "./src/vendorServiceScreens/BikeService";
import ForgotPassword from "./src/forgotpassword/ForgotPassword";
import EmailOtp from "./src/forgotpassword/EmailOtp";
import ResetPassword from "./src/forgotpassword/ResetPassword";
import CustomerBikeService from "./src/customerScreens/CustomerBikeService";
import ProfileDetailsScreen from "./src/customerScreens/ProfileDetailsScreen";
import VendorHomeScreen from "./src/vendorServiceScreens/VendorHomeScreen";
import VendorProfileMenu from "./src/vendorServiceScreens/VendorProfileMenu";
import BikeServicesTypes from "./src/vendorServiceScreens/BikeServicesTypes";
import SignupPassword from "./src/auth/SignupPassword";
import LoginOtpScreen from "./src/auth/LoginOtpScreen";
import SignupOtpScreen from "./src/auth/SignupOtpScreen";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="LoginPassword" component={LoginPassword} />
        <Stack.Screen name="SignupOtpScreen" component={SignupOtpScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vendor" component={Vendor} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="BikeService" component={BikeService} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailOtp" component={EmailOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CustomerBikeService" component={CustomerBikeService} />
        <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
        <Stack.Screen name="VendorHomeScreen" component={VendorHomeScreen} />
        <Stack.Screen name="VendorProfileMenu" component={VendorProfileMenu} />
        <Stack.Screen name="BikeServicesTypes" component={BikeServicesTypes} />
        <Stack.Screen name="SignupPassword" component={SignupPassword} />
        <Stack.Screen name="LoginOtpScreen" component={LoginOtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
