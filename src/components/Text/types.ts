import { TextProps } from "react-native";
import { TypographyType } from "styled-components";

export interface Props extends TextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  type?: TypographyType;
}

export interface TextStylesProps {
  size: number;
  color: string;
  type: TypographyType;
}
