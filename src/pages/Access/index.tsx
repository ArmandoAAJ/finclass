import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import Separator from "../../components/Separator";

import ImageBanner from "../../../assets/images/banner/image.png";
import ImageEmailIcon from "../../../assets/icons/email.png";
import { Container, Content, Banner, EmailIcon, ImpactPhrase } from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

const Access: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  function handleButtonLogin() {
    navigation.navigate("login");
  }

  return (
    <Container>
      <Banner source={ImageBanner} />
      <Content>
        <ImpactPhrase type="bold">
          {`Aprenda a inventar e\nconquistar sua liberdade\nfinanceira`}
        </ImpactPhrase>
        <Separator height={20} />
        <Button title="Assine agora" textType="bold" />
        <Separator height={20} />
        <Button
          outlined
          title="Entrar com email"
          textType="semiBold"
          icon={
            <EmailIcon
              resizeMode="contain"
              source={ImageEmailIcon}
              style={{ tintColor: colors.background.onMain }}
            />
          }
          onPress={handleButtonLogin}
        />
        <Separator height={20} />
      </Content>
    </Container>
  );
};

export default Access;
