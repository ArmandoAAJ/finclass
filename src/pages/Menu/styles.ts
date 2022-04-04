import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: center;
  padding: 0 20px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Divider = styled.View`
  height: 0.3px;
  background-color: ${({ theme }) => theme.colors.placeholder.main};
`;

export const ContainerEarnedItem = styled.View`
  width: 80px;
  height: 80px;
  max-width: 80px;
  max-height: 80px;
  align-items: center;
`;

export const EarnedItemLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const IconTitle = styled.Image`
  width: 28px;
  height: 28px;
`;
