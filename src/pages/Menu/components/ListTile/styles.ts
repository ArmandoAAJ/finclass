import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const Group = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RightArrow = styled.Image`
  transform: rotate(180deg);
  width: 12px;
  height: 12px;
`;
