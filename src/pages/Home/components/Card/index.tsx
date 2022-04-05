import React from "react";
import { View, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";
import Separator from "../../../../components/Separator";
import Text from "../../../../components/Text";

import { Container, Cover } from "./styles";
import { Props } from "./types";

const Card = ({ source, title, description }: Props) => {
  const { width, height } = useWindowDimensions();
  const { colors } = useTheme();
  return (
    <Container windowWidth={width}>
      <Cover source={source} windowHeight={height} windowWidth={width} />
      <Separator height={15} />
      <Text type="bold" numberOfLines={2}>
        {title}
      </Text>
      <Separator height={5} />
      {!!description && (
        <Text
          type="bold"
          numberOfLines={2}
          size={10}
          color={colors.placeholder.main}
        >
          {description}
        </Text>
      )}
    </Container>
  );
};

export default Card;
