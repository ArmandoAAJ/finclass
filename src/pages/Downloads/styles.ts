import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  text-align: center;
`;

export const Icon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100px;
  height: 100px;
`;
