import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import Cookies from "js-cookie";

const LogoutAlert = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate("/log");
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="flex justify-center items-center flex-col cursor-pointer">
            <LogOut />
            <p>Log out</p>
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Выйти из аккаунта?</AlertDialogTitle>

            <AlertDialogDescription>
              Вы уверены, что хотите выйти? Для продолжения потребуется снова
              войти в систему.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Отмена
            </AlertDialogCancel>

            <AlertDialogAction onClick={logout} className="cursor-pointer">
              Выйти
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LogoutAlert;
