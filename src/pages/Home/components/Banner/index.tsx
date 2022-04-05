import React from "react";
import { useWindowDimensions, View } from "react-native";

import {
  BannerImageBackground,
  ButtonContainer,
  ButtonHeaderContainer,
  ButtonHeaderOutlined,
  ButtonIcon,
  Gradient,
  TextContainer,
} from "./styles";
import { Props } from "./types";
import { useTheme } from "styled-components";
import Text from "../../../../components/Text";
import Separator from "../../../../components/Separator";
import playIcon from "../../../../../assets/icons/play.png";
import plusIcon from "../../../../../assets/icons/plus.png";

const Banner = ({ description, presenter, source }: Props) => {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  return (
    <BannerImageBackground resizeMode="cover" width={width} source={source}>
      <Text type="bold" size={12}>
        {presenter}
      </Text>
      <Text type="bold" size={24}>
        {description}
      </Text>
      <Gradient colors={["transparent", colors.background.main]}>
        <Separator height={15} />
        <ButtonContainer>
          <ButtonHeaderContainer>
            <ButtonIcon
              source={playIcon}
              style={{ tintColor: colors.background.main }}
            />
            <Separator width={10} />
            <Text type="bold" size={12} color={colors.background.main}>
              Assistir
            </Text>
          </ButtonHeaderContainer>
          <Separator width={10} />
          <ButtonHeaderOutlined>
            <ButtonIcon
              source={plusIcon}
              style={{ tintColor: colors.background.onMain }}
            />
            <Separator width={10} />
            <Text type="bold" size={12} color={colors.background.onMain}>
              Detalhes
            </Text>
          </ButtonHeaderOutlined>
        </ButtonContainer>
        <Separator height={45} />
      </Gradient>
    </BannerImageBackground>
  );
};

export default Banner;
