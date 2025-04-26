'use client'
import lightTheme from "@/lib/lightTheme";
import darkTheme from "@/lib/darktheme";
import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext({
  toogleColorMode: () => {},
  mode: "light",
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // create theme changer
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toogleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toogleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
