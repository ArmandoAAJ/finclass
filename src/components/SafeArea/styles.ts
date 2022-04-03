import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerProps } from "./types";

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.background.main};
`;
