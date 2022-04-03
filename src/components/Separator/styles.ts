import styled from "styled-components/native";
import { ContainerProps } from "./types";

export const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width || 0}px;
  width: ${({ height }) => height || 0}px;
`;
