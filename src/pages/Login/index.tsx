import React from "react";
import BackButton from "../../components/BackButton";
import Separator from "../../components/Separator";
import Text from "../../components/Text";
import ImageLock from "../../../assets/icons/lock/icon.png";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  Content,
  Header,
  LockIcon,
  OptionRightHeader,
} from "./styles";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input/Index";
import Button from "../../components/Button";
import { schemaLogin } from "./validation";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleGoBack() {
    navigation.goBack();
  }

  async function onSubmit() {
    await handleSubmit(({ email, password }) => {
      //TODO
    })();
  }

  return (
    <Container>
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={handleGoBack} />
          <OptionRightHeader>
            <Text size={13}>Recuperar senha</Text>
            <Separator width={10} />
            <LockIcon source={ImageLock} />
          </OptionRightHeader>
        </Header>
        <Separator height={30} />
        <Text size={20} type="semiBold">
          Acessar minha conta
        </Text>
        <Separator height={30} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="email"
                autoCapitalize="none"
                keyboardType="email-address"
                name="E-mail"
                placeholder="Insira seu e-mail"
                onChange={onChange}
                onChangeText={(text) => setValue("email", text)}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="password"
                autoCapitalize="none"
                name="Senha"
                placeholder="Insira sua senha"
                onChange={onChange}
                onChangeText={(text) => setValue("password", text)}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
              />
            );
          }}
        />
        <Separator height={55} />
        <Button title="Entrar" onPress={onSubmit} textType="semiBold" />
      </Content>
    </Container>
  );
};

export default Login;
