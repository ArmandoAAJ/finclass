import styled from "styled-components/native";
import { IconProps } from "./types";

export const Icon = styled.Image.attrs({
  resizeMode: "contain",
})<IconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
