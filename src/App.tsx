import { RouterProvider } from "react-router";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { routes } from "./routes.tsx";
import { AuthProvider } from "./context/AuthContextData.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { useTheme } from "./hooks/useTheme.ts";
import { GlobalStyle } from "./styles/globalStyles.ts";
import { lightTheme, darkTheme } from "./styles/themes.ts";

function ThemedApp() {

    const { isDark } = useTheme();
    const theme = isDark ? darkTheme : lightTheme;

    return (
        <AuthProvider>
            <StyledThemeProvider theme={theme}>
                <GlobalStyle theme={theme} />
                <RouterProvider router={routes} />
            </StyledThemeProvider>
        </AuthProvider>
    )
};

export function App() {

    return (
        <AuthProvider>
            <ThemeProvider>
                <ThemedApp />
            </ThemeProvider>
        </AuthProvider>
    )

};