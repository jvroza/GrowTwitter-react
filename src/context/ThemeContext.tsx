import { createContext, useState, useMemo, type ReactNode } from "react";

interface IThemeContextData {
    isDark: boolean;
    toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    function toggleTheme() {
        setIsDark((prev) => {
            const next = !prev;
            localStorage.setItem("theme", next ? "dark" : "light");
            return next;
        });
    }

    const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}