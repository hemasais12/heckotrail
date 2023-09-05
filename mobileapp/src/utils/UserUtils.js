import { ROLE_VENDOR } from "../common/constants";

export function setUserLoggedIn(responseData, authCtx) {
  authCtx.authenticate(responseData.jwtAuthenticationResponse.token);

  if (responseData.user.roles[0].name === ROLE_VENDOR) {
    authCtx.setUserRole(ROLE_VENDOR);
  }
}

export function setUserLoggedOut() {}
