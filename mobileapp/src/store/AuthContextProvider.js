import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  userRole: "",
  isVendorSetupDone: false,
  authenticate: (token) => {},
  setUserRole: (role) => {},
  setVendorSetupStatus: (isVendorSetupDone) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userRoleSelection, setUserRoleSelection] = useState(null);
  const [isVendorSetupDone, setIsVendorSetupDone] = useState(false);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    setUserRoleSelection(null);
    setIsVendorSetupDone(false);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userRole");
    AsyncStorage.removeItem("isVendorSetupDone");
  }

  function setUserRole(role) {
    setUserRoleSelection(role);
    AsyncStorage.setItem("userRole", role);
  }

  function setVendorSetupStatus(isVendorSetupDone) {
    setIsVendorSetupDone(isVendorSetupDone);
    AsyncStorage.setItem("isVendorSetupDone", isVendorSetupDone);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    userRole: userRoleSelection,
    isVendorSetupDone: isVendorSetupDone,
    authenticate: authenticate,
    setUserRole: setUserRole,
    setVendorSetupStatus: setVendorSetupStatus,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
