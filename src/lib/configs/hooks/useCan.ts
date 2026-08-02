import Cookies from "js-cookie";
import { ACTION_PERMISSIONS, Actions, type Role } from "../rolePermissions";
import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  Fullname: string;
  email: string;
  role: Role;
  exp: number;
}

export const useCan = () => {
  const token = Cookies.get("token");
  const getUserRole = () => {
    try {
      const decoded = jwtDecode<DecodedToken>(token || "");
      return decoded.role;
    } catch {
      console.error("ошибка токена");
    }
  };

  const user = getUserRole();

  const can = (action: Actions) => {
    return ACTION_PERMISSIONS[user].includes(action);
  };

  const hasRoles = (roles: Role[] | Role | undefined): boolean => {
    if (!roles?.length || !roles) {
      return true;
    }
    return roles.includes(user);
  };

  return { can, hasRoles, user };
};
