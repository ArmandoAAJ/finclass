import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Separator from "../../../../components/Separator";
import Text from "../../../../components/Text";
import { Container, Group, RightArrow } from "./styles";
import { Props } from "./types";

import IconChecron from "../../../../../assets/icons/chevron-left.png";

const ListTile = ({ icon, title, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <Group>
        {icon}
        <Separator height={10} />
        <Text>{title}</Text>
      </Group>
      <RightArrow
        style={{ tintColor: colors.placeholder.main }}
        source={IconChecron}
      />
    </Container>
  );
};

export default ListTile;
