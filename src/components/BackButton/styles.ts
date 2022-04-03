import styled from "styled-components/native";

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  height: 36px;
  width: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const IconBack = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 10px;
  height: 10px;
  position: absolute;
`;
