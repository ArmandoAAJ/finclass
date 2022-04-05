import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Separator from "../../../../components/Separator";
import Text from "../../../../components/Text";
import { data2 } from "../../mock";

import { Container, Content, Image } from "./styles";

const LastWatched = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <Image source={data2[0].image} resizeMode="contain" />
        <Separator width={15} />
        <View>
          <Text type="bold">Ná Prática</Text>
          <Separator height={5} />
          <Text size={12} color={colors.placeholder.main} type="semiBold">
            Ná Prática
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default LastWatched;
