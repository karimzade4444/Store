import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="
        fixed
        right-8
        top-8
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        bg-white/80
        shadow-xl
        backdrop-blur-xl
        transition-all
        hover:scale-110
        dark:border-white/20
        dark:bg-black/40
        cursor-pointer
      "
    >
      {dark ? (
        <Moon className="h-6 w-6 text-yellow-300" />
      ) : (
        <Sun className="h-6 w-6 text-orange-400" />
      )}
    </button>
  );
}
