import styled from "styled-components/native";
import { ContainerProps, TitleProps } from "./types";

export const Container = styled.Pressable<ContainerProps>`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.backdrop.main : theme.colors.placeholder.main};
  border-width: ${({ outlined }) => (outlined ? 1.5 : 0)}px;
  border-radius: ${({ theme }) => theme.borders.readius.sm}px;
  background-color: ${({ theme, color, outlined }) => {
    if (outlined) return "transparent";
    return color || theme.colors.primary.main;
  }};
`;

export const Title = styled.Text<TitleProps>`
  font-size: 12px;
  letter-spacing: ${({ theme, type }) =>
    theme.typography[type].letterSpacing}px;
  font-family: ${({ theme, type }) => theme.typography[type].fontFamily};
  color: ${({ color }) => color};
`;

export const SpacingIcon = styled.View`
  width: 15px;
`;
