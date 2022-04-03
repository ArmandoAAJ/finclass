import styled from "styled-components/native";
import Text from "../Text";
import { InputStyleProps } from "./types";

export const Container = styled.View``;

export const Content = styled.View`
  justify-content: center;
`;

export const TextInput = styled.TextInput<InputStyleProps>`
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  color: ${({ theme }) => theme.colors.background.onMain};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ theme }) => theme.borders.readius.sm}px;
  letter-spacing: ${({ theme }) => theme.typography.semiBold.letterSpacing}px;
  font-family: ${({ theme }) => theme.typography.semiBold.fontFamily};
  font-size: 13px;
  height: 50px;
  border-width: 1px;
  padding: 0 ${({ hasRightIcon }) => (hasRightIcon ? 40 : 15)}px 0
    ${({ hasLeftIcon }) => (hasLeftIcon ? 40 : 15)}px;
`;

export const Label = styled(Text)`
  margin-vertical: 10px;
`;

export const Error = styled(Text)`
  margin-top: 10px;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.error.main};
`;

export const ToogleEye = styled.Pressable`
  right: 20px;
  position: absolute;
`;

export const EyeIcon = styled.Image`
  height: 20px;
  width: 20px;
`;

export const LeftIconContainer = styled.View`
  left: 15px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const RightIconContainer = styled.View`
  right: 15px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
