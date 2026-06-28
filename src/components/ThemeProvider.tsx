"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import * as React from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<"dark" | "light">("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        const isDark = mediaQuery.matches;
        setResolvedTheme(isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDark);
      }
    };

    if (theme === "system") {
      handleChange();
      mediaQuery.addEventListener("change", handleChange);
      window.localStorage.removeItem("theme");
    } else {
      setResolvedTheme(theme as "dark" | "light");
      document.documentElement.classList.toggle("dark", theme === "dark");
      window.localStorage.setItem("theme", theme);
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
      resolvedTheme,
    }),
    [theme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
