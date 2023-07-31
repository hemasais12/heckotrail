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
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}}/>
        <Stack.Screen name="LoginPassword" component={LoginPassword}  options={{headerShown:false}}/>
        <Stack.Screen name="SignupOtpScreen" component={SignupOtpScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} 
          options={{headerShown:false}}
        />
        <Stack.Screen name="Services" component={Vendor} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="BikeService" component={BikeService} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailOtp" component={EmailOtp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="CustomerBikeService" component={CustomerBikeService} />
        <Stack.Screen name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
        <Stack.Screen name="Registered Services" component={VendorHomeScreen} />
        <Stack.Screen name="Account Details" component={VendorProfileMenu} />
        <Stack.Screen name="Bike Services Types" component={BikeServicesTypes} />
        <Stack.Screen name="SignupPassword" component={SignupPassword}  options={{headerShown:false}}/>
        <Stack.Screen name="LoginOtpScreen" component={LoginOtpScreen}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// screenOptions={{ headerShown: false }}