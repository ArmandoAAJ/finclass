import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled(Animated.View)<Props>`
  background-color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.placeholder.main : theme.colors.background.onMain};
  height: 6px;
  border-radius: 3px;
  margin: 0 2.5px;
`;
