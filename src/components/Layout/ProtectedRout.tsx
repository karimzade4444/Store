import { useCan } from "@/lib/configs/hooks/useCan";
import type { Role } from "@/lib/configs/rolePermissions";
import { Navigate, Outlet } from "react-router";

interface IProtectedRoutProps {
  roles: Role[];
}
const ProtectedRout = ({ roles }: IProtectedRoutProps) => {
  const { hasRoles, user } = useCan();

  if (!user) {
    return <Navigate to={"/log"} replace />;
  }
  if (!hasRoles(roles)) {
    return <Navigate to={"*"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRout;
