import { ROLE_VENDOR } from "../common/constants";

export function setUserLoggedIn(responseData, authCtx) {
  authCtx.authenticate(responseData.jwtAuthenticationResponse.token);
  console.log(responseData.user);
  console.log(responseData.user.roles);
  console.log(responseData.user.roles[0].name);
  if (responseData.user.roles[0].name === ROLE_VENDOR) {
    authCtx.setUserRole(ROLE_VENDOR);
  }
}

export function setUserLoggedOut() {}
