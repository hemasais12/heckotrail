import SyncStorage from "sync-storage";

import { createContext, useEffect, useState } from "react";
import {
  STORAGE_TOKEN,
  STORAGE_USERROLE,
  STORAGE_VENDOR_SETUP_STATUS,
} from "../common/constants";

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
    SyncStorage.set(STORAGE_TOKEN, token);
  }

  function logout() {
    setAuthToken(null);
    setUserRoleSelection(null);
    setIsVendorSetupDone(false);
    SyncStorage.remove(STORAGE_TOKEN);
    SyncStorage.remove(STORAGE_USERROLE);
    SyncStorage.remove(STORAGE_VENDOR_SETUP_STATUS);
  }

  function setUserRole(role) {
    setUserRoleSelection(role);
    SyncStorage.set(STORAGE_USERROLE, role);
  }

  function setVendorSetupStatus(isVendorSetupDone) {
    setIsVendorSetupDone(isVendorSetupDone);
    SyncStorage.set(STORAGE_VENDOR_SETUP_STATUS, isVendorSetupDone);
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
