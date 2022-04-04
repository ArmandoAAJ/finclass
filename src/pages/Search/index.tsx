import React, { useState } from "react";
import { useTheme } from "styled-components";
import Input from "../../components/Input";
import Text from "../../components/Text";

import IconSearch from "../../../assets/icons/search.png";
import IconClose from "../../../assets/icons/close.png";
import IconEmptyResultsIcon from "../../../assets/icons/empty/empty-results.png";

import {
  Container,
  CenterText,
  CloseIcon,
  ContainerEmpty,
  ContainerHeader,
  ContainerText,
  EmptyIcon,
  SearchIcon,
} from "./styles";
import Separator from "../../components/Separator";
import { Pressable, ScrollView } from "react-native";
import Dots from "../../components/Dots";

const Search: React.FC = () => {
  const { colors } = useTheme();
  const [searchText, setSearchText] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  function handleCleanText() {
    setSearchText("");
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background.main }}>
      <Container>
        <Separator height={20} />
        <ContainerHeader>
          <Text type="bold" size={22}>
            Buscar
          </Text>
          {!!searchText && <Text onPress={handleCleanText}>Cancelar</Text>}
        </ContainerHeader>
        <Separator height={12} />
        <Input
          onBlur={() => setHasFocus(false)}
          onFocus={() => setHasFocus(true)}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          leftIcon={
            <SearchIcon
              style={{ tintColor: colors.backdrop.onMain }}
              source={IconSearch}
            />
          }
          rightIcon={
            !!searchText && (
              <Pressable onPress={handleCleanText}>
                <CloseIcon
                  style={{ tintColor: colors.backdrop.onMain }}
                  source={IconClose}
                />
              </Pressable>
            )
          }
        />
        {!searchText && (
          <>
            <Separator height={20} />
            <Text type="bold" size={22}>
              Últimas buscas
            </Text>
            <Separator height={20} />
            <Text size={12}>Nenhuma busca recente...</Text>
          </>
        )}
        {!!searchText && (
          <>
            <Separator height={60} />
            <ContainerEmpty>
              <EmptyIcon resizeMode="contain" source={IconEmptyResultsIcon} />
              <Separator height={60} />
              <CenterText size={22} type="bold">
                {`Nenhum resultado\ndisponível`}
              </CenterText>
              <Separator height={60} />
              <Dots amount={6} />
            </ContainerEmpty>
          </>
        )}
      </Container>
    </ScrollView>
  );
};

export default Search;
