import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  border-radius: ${({ theme }) => theme.borders.readius.sm}px;
  width: 100%;
  height: 80px;
  padding: 0 10px;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.Image`
  width: 90px;
  height: 55px;
  border-radius: ${({ theme }) => theme.borders.readius.sm}px;
`;
