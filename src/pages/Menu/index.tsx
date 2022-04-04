import React from "react";
import IconBadge from "../../../assets/icons/badge_ulrich.png";
import IconPrifileEdit from "../../../assets/icons/edit-profile/edit-profile.png";
import IconProgress from "../../../assets/icons/progress/progress.png";
import IconSubs from "../../../assets/icons/subscription/subscription.png";
import IconHelp from "../../../assets/icons/help/help.png";
import IconTerms from "../../../assets/icons/terms/terms.png";
import Text from "../../components/Text";

import {
  Container,
  Avatar,
  ContainerEarnedItem,
  Divider,
  EarnedItemLogo,
  IconTitle,
  ProfileContainer,
} from "./styles";
import { useTheme } from "styled-components";
import { ScrollView } from "react-native";
import Separator from "../../components/Separator";
import ListTile from "./components/ListTile";
import Button from "../../components/Button";

const Menu: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Separator height={20} />
        <ProfileContainer>
          <Avatar
            source={{
              uri: "https://avatars.githubusercontent.com/u/7575325?v=4",
            }}
          />
          <Separator height={20} />
          <Text size={22} type="bold">
            Armando
          </Text>
          <Separator height={44} />
          <Text size={12} type="bold" color={colors.placeholder.main}>
            Minhas conquistas:
          </Text>
        </ProfileContainer>
        <Separator height={20} />
        <ContainerEarnedItem>
          <Separator height={20} />
          <EarnedItemLogo source={IconBadge} />
          <Separator height={12} />
          <Text
            size={11}
            type="bold"
            color={colors.placeholder.main}
            numberOfLines={1}
          >
            Investidor do futuro
          </Text>
        </ContainerEarnedItem>
        <Separator height={20} />
        <Divider />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Conta
        </Text>
        <Separator height={20} />
        <ListTile
          onPress={() => {}}
          title="Editar conta"
          icon={<IconTitle source={IconPrifileEdit} />}
        />
        <ListTile
          onPress={() => {}}
          title="Meu progresso"
          icon={<IconTitle source={IconProgress} />}
        />
        <ListTile
          onPress={() => {}}
          title="Plano de assinatura"
          icon={<IconTitle source={IconSubs} />}
        />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Ajustes
        </Text>
        <Separator height={15} />
        <ListTile
          onPress={() => {}}
          title="Configurações do aplicativo"
          icon={<IconTitle source={IconPrifileEdit} />}
        />
        <ListTile
          onPress={() => {}}
          title="Central de ajuda"
          icon={<IconTitle source={IconHelp} />}
        />
        <ListTile
          onPress={() => {}}
          title="Política de priacidade"
          icon={<IconTitle source={IconTerms} />}
        />
        <Separator height={30} />
        <Button textType="bold" outlined title="Sair" onPress={() => {}} />
        <Separator height={30} />
        <Text size={12} type="bold" color={colors.placeholder.main}>
          Finclass 1.3.0
        </Text>
      </ScrollView>
    </Container>
  );
};

export default Menu;
