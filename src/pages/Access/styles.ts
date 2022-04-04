import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: space-between;
`;

export const Content = styled.View`
  margin: 0 20px;
  justify-content: flex-end;
`;

export const EmailIcon = styled.Image`
  margin: 20px;
  width: 20px;
`;

export const ImpactPhrase = styled(Text)`
  text-align: center;
  font-size: 22px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 400px;
  margin-top: -25px;
`;
