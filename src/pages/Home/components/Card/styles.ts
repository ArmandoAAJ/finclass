import styled from "styled-components/native";
import { ContainerProps, CoverProps } from "./types";

export const Container = styled.View<ContainerProps>`
  max-width: ${({ windowWidth }) => windowWidth * 0.4}px;
`;

export const Cover = styled.Image<CoverProps>`
  border-radius: ${({ theme }) => theme.borders.readius.sm}px;
  width: ${({ windowWidth }) => windowWidth * 0.4}px;
  height: ${({ windowHeight }) => windowHeight * 0.28}px;
`;
