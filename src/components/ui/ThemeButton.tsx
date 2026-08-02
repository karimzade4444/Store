import { useEffect, useState } from "react";

import { Cloud, Moon, Star, Sun } from "lucide-react";

export default function ThemeButton() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`relative h-10 w-20 overflow-hidden rounded-full border transition-all duration-700 cursor-pointer ${
        dark
          ? "border-slate-700 bg-linear-to-b from-slate-900 via-slate-800 to-slate-700"
          : "border-sky-300 bg-linear-to-b from-sky-300 via-sky-200 to-yellow-100"
      }`}
    >
      <Sun
        className={`absolute left-3 top-2 h-5 w-5 text-yellow-300 transition-all duration-700 ${
          dark
            ? "translate-y-6 opacity-0 rotate-180"
            : "translate-y-0 opacity-100 rotate-0"
        }`}
      />

      <Moon
        className={`absolute right-3 top-2 h-5 w-5 text-yellow-100 transition-all duration-700 ${
          dark ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      />

      <Cloud
        className={`absolute left-9 top-1 h-5 w-5 text-white transition-all duration-700 ${
          dark ? "-translate-y-5 opacity-0" : "opacity-90"
        }`}
      />

      <Cloud
        className={`absolute left-14 top-4 h-4 w-4 text-white transition-all duration-700 delay-75 ${
          dark ? "-translate-y-5 opacity-0" : "opacity-80"
        }`}
      />

      <Star
        fill="white"
        className={`absolute right-10 top-1 h-3 w-3 text-white transition-all duration-700 ${
          dark ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      <Star
        fill="white"
        className={`absolute right-16 top-4 h-2.5 w-2.5 text-white transition-all duration-700 delay-100 ${
          dark ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      <div
        className={`absolute bottom-0 h-3 w-full transition-all duration-700 ${
          dark
            ? "bg-linear-to-t from-slate-900 to-slate-700"
            : "bg-linear-to-t from-green-600 to-green-400"
        }`}
      />

      {!dark && (
        <>
          <span className="absolute bottom-1 left-9 text-[9px]">🌻</span>
          <span className="absolute bottom-1 left-14 text-[9px]">🌼</span>
          <span className="absolute bottom-1 left-18 text-[9px]">🌻</span>
        </>
      )}

      {dark && (
        <>
          <span className="absolute bottom-0 left-10 text-[10px]">🌲</span>
          <span className="absolute bottom-0 left-14 text-[10px]">🌲</span>
          <span className="absolute bottom-0 left-18 text-[10px]">🌲</span>
        </>
      )}

      <div
        className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-700 ${
          dark ? "translate-x-10 rotate-180" : "translate-x-1 rotate-0"
        }`}
      >
        {dark ? (
          <Moon className="h-5 w-5 text-slate-700" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
