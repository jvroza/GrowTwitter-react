import { createGlobalStyle } from "styled-components";
import type { ITheme } from "./themes";

export const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        transition: background-color 0.2s, color 0.2s;
    }
`;