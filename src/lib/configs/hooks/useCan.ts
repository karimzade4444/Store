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
  const decoded = jwtDecode<DecodedToken>(token || "");
  const user = decoded.role;

  const can = (action: Actions) => {
    return ACTION_PERMISSIONS[user].includes(action);
  };

  return { can };
};
