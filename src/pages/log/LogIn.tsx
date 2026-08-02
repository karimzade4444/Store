import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/api/auth";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

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

  const onSubmit = (data: { password: string; username: string }) => {
    mutate(data);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-black/70 to-cyan-700" />

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-500/40 blur-3xl" />
      <div className="absolute right-0 top-20 h-113 w-113 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/40 blur-3xl" />

      <div className="relative z-10 w-113 rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Добро Пожаловать
        </h1>

        <p className="mb-8 text-center text-gray-300">
          Войдите чтобы продолжить
        </p>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FormInput
              name="username"
              control={control}
              placeholder="username"
            />
            <FormInput
              name="password"
              control={control}
              placeholder="username"
              type="password"
            />
            <Button type="submit" className="w-full cursor-pointer">Войти</Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don't have an account?
          <span className="cursor-pointer font-semibold text-cyan-400 hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
