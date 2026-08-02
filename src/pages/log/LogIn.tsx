import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useState } from "react";

const LogIn = () => {
  const { control, handleSubmit } = useForm<{
    password: string;
    username: string;
  }>();

  const navigate = useNavigate();
  
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log(res);
      const token = res.data.data;
      if (token) {
        Cookies.set("token", token);
        navigate("/");
      }
    },
  });
const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const onSubmit = (data: { password: string; username: string }) => {
    mutate(data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7f6] dark:bg-[#061b16] transition-colors">
      <div
        className="
      absolute inset-0
      bg-[radial-gradient(circle_at_top_left,#25D36633,transparent_35%)]
      dark:bg-[radial-gradient(circle_at_top_left,#25D36644,transparent_35%)]
    "
      />

      <button
        onClick={() => {
          const newTheme = !dark;

          setDark(newTheme);

          localStorage.setItem("theme", newTheme ? "dark" : "light");

          document.documentElement.classList.toggle("dark", newTheme);
        }}
        className="
    absolute
    right-8
    top-8
    z-20
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    bg-white/70
    shadow-lg
    backdrop-blur
    dark:bg-white/10
    cursor-pointer
  "
      >
        {dark ? (
          <Moon className="text-gray-600" />
        ) : (
          <Sun className="text-yellow-400" />
        )}
      </button>

      <div
        className="
      relative z-10
      mx-auto flex min-h-screen
      max-w-6xl items-center
      px-6
    "
      >
        <div
          className="
        hidden
        w-1/2
        flex-col
        justify-center
        md:flex
      "
        >
          <div className="flex items-center gap-4">
            <div
              className="
            flex h-16 w-16
            items-center justify-center
            rounded-3xl
            bg-primary
            shadow-xl
          "
            >
              <Sparkles className="text-white" />
            </div>

            <h1
              className="
            text-5xl
            font-black
            text-gray-900
            dark:text-white
          "
            >
              MAGMUS
            </h1>
          </div>

          <h2
            className="
          mt-10
          text-6xl
          font-black
          leading-tight
          text-gray-900
          dark:text-white
        "
          >
            Manage your
            <span
              className="
            block
            text-primary
          "
            >
              business easier.
            </span>
          </h2>

          <p
            className="
          mt-6
          max-w-lg
          text-lg
          text-gray-500
          dark:text-gray-400
        "
          >
            Powerful admin panel for managing products, users and your digital
            store in one place.
          </p>

          <div
            className="
          mt-10
          flex gap-5
        "
          >
            <div
              className="
            rounded-3xl
            border
            bg-white/60
            p-6
            shadow-xl
            dark:border-white/10
            dark:bg-white/5
          "
            >
              <h3
                className="
              text-3xl
              font-bold
              dark:text-white
            "
              >
                100+
              </h3>

              <p className="text-gray-500">Products</p>
            </div>

            <div
              className="
            rounded-3xl
            border
            bg-white/60
            p-6
            shadow-xl
            dark:border-white/10
            dark:bg-white/5
          "
            >
              <h3
                className="
              text-3xl
              font-bold
              dark:text-white
            "
              >
                24/7
              </h3>

              <p className="text-gray-500">Control</p>
            </div>
          </div>
        </div>

        <div
          className="
        w-full
        md:w-1/2
      "
        >
          <div
            className="
          mx-auto
          max-w-md
          rounded-4xl
          border
          bg-white/70
          p-10
          shadow-2xl
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-white/10
        "
          >
            <h1
              className="
            text-4xl
            font-black
            dark:text-white
          "
            >
              Welcome back 👋
            </h1>

            <p
              className="
            mt-3
            text-gray-500
            dark:text-gray-400
          "
            >
              Sign in to continue
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <FormInput
                name="username"
                control={control}
                placeholder="Username"
              />

              <FormInput
                name="password"
                control={control}
                placeholder="Password"
                type="password"
              />

              <Button
                type="submit"
                className="
                h-12
                w-full
                rounded-xl
                bg-primary
                text-white
                text-lg
                font-bold
                hover:bg-primary/70
                transition
                duration-300 cursor-pointer
              "
              >
                Войти
              </Button>
            </form>

            <p
              className="
            mt-8
            text-center
            text-sm
            text-gray-500
          "
            >
              Don't have an account?
              <span
                className="
              ml-1
              cursor-pointer
              font-bold
              text-primary
            "
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
