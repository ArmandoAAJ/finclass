import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import Dots from "../../components/Dots";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import { Container, Icon, Title } from "./styles";
import download from "../../../assets/icons/download-rounded.png";

const Downloads: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <Icon source={download} style={{ tintColor: colors.primary.main }} />
      <Separator height={40} />
      <Title size={22} type="bold">
        Você não tem downloads
      </Title>
      <Separator height={20} />
      <Title>{`Os vídeos de aulas que baixar\nvão aparecer aqui`}</Title>
      <Separator height={20} />
      <Dots amount={6} />
    </Container>
  );
};

export default Downloads;
