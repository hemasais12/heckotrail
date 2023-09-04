import { httpPost, httpGet } from "../base/BaseApi";
import {
  URL_ROLE_ADD_USERROLE,
  URL_ROLE_ADD_USERROLES,
  URL_ROLE_ADD_USERROLES,
} from "../urls/RoleURLs";

export function apiAddUserRole(requestData) {
  return httpPost(URL_ROLE_ADD_USERROLE, requestData);
}

export function apiAddUserRoles(requestData) {
  return httpPost(URL_ROLE_ADD_USERROLES, requestData);
}

export function apiUpdateDefaultUserRole(requestData) {
  return httpPost(URL_ROLE_UPDATE_DEFAULT_USERROLE, requestData);
}
