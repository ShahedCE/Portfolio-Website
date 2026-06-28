"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="text-gray-400 hover:text-foreground transition-colors p-2 rounded-lg"
        aria-label="Toggle Theme"
      >
        <div className="w-[18px] h-[18px]"></div>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-400 hover:text-foreground transition-colors p-2 rounded-lg flex items-center justify-center relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <Sun 
        size={18} 
        className="absolute transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 group-hover:text-primary" 
      />
      <Moon 
        size={18} 
        className="transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 group-hover:text-primary" 
      />
    </button>
  );
}
