import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 0 20px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchIcon = styled.Image`
  width: 15;
  height: 15px;
  align-items: center;
`;

export const CloseIcon = styled.Image`
  width: 15;
  height: 15px;
  align-items: center;
`;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.View`
  text-align: center;
`;

export const CenterText = styled(Text)`
  text-align: center;
`;

export const EmptyIcon = styled.Image`
  width: 120px;
  height: 120px;
`;
