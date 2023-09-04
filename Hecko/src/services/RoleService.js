import {
  apiAddUserRole,
  apiAddUserRoles,
  apiUpdateDefaultUserRole,
} from "../api/apiutils/RoleApi";

const doAddUserRole = (requestData) => {
  return apiAddUserRole(requestData);
};

const doAddUserRoles = (requestData) => {
  return apiAddUserRoles(requestData);
};

const doUpdateDefaultUserRole = (requestData) => {
  return apiUpdateDefaultUserRole(requestData);
};

const AuthService = {
  doAddUserRole,
  doAddUserRoles,
  doUpdateDefaultUserRole,
};

export default RoleService;
