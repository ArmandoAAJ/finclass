import { interpolateNode } from "react-native-reanimated";
import "styled-components"
import { number } from "yup"

declare module "styled-components" {
    export interface Border {
        readius: {
            sm: number
        }
    }
    export interface ColorType {
        main: string;
        onMain: string
    }
    export type ColorsType = "primary" | "backdrop" | "background" | "error" | "placeholder";

    export interface PaleteType {
        primary: ColorType
        backdrop: ColorType
        background: ColorType
        error: ColorType
        placeholder: ColorType
    }
    export interface TypographyProps {
        fontFamily: string
        letterSpacing: number
    }
    export interface Typography {
        regular: TypographyProps
        semiBold: TypographyProps
        bold: TypographyProps
    }
    export type TypographyType = "regular" | "semiBold" | "bold"

    export interface DefaultTheme {
        typography: Typography
        colors: PaleteType
        borders: Border
    }


}