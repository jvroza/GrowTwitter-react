import type { ITheme } from "./themes";

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {
        _brand?: never;
    }
};