import styled from "styled-components/native";
import { Props } from "./types";

export const Dot = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

export const ContainerDots = styled.View<Props>`
  flex-direction: row;
  justify-content: space-between;
  width: ${({ amount }) => amount * 15}px;
`;
