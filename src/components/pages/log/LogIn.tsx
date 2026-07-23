import { Link } from "react-router";

const LogIn = () => {
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

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/70 outline-none transition focus:border-violet-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/70 outline-none transition focus:border-violet-400"
          />
          <Link to="/">
            <button className="h-12 w-full cursor-pointer rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl">
              Войти
            </button>
          </Link>
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
