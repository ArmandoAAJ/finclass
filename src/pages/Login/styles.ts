import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const Content = styled.View`
  margin: 0 20px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionRightHeader = styled.View`
  flex-direction: row;
`;

export const LockIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 16px;
  width: 16px;
`;
