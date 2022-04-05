import React from "react";
import { View } from "react-native";

import { Container, RightChevron, Row } from "./styles";
import { useTheme } from "styled-components";
import { Props } from "./types";
import Text from "../../../../components/Text";
import Separator from "../../../../components/Separator";
import Icon from "../../../../../assets/icons/chevron-left.png";

const Section = ({ leftNode }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      {leftNode}
      <Row>
        <Text type="semiBold">ver todos</Text>
        <Separator width={20} />
        <RightChevron
          source={Icon}
          style={{ tintColor: colors.primary.main }}
        />
      </Row>
    </Container>
  );
};

export default Section;
