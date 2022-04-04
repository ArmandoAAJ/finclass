import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components";

import {
  Container,
  Content,
  Label,
  TextInput,
  Error,
  ToogleEye,
  EyeIcon,
  RightIconContainer,
} from "./styles";
import { Props } from "./types";
import { LeftIconContainer } from "./styles";

const Input = ({
  error,
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  onBlur,
  onFocus,
  name,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, hasFocus, colors]);

  return (
    <Container>
      {!!name && (
        <Label size={12} type="semiBold">
          {name}
        </Label>
      )}
      <Content>
        {!!leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <TextInput
          {...rest}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={colors.background.main}
          selectionColor={colors.placeholder.onMain}
          borderColor={borderColor}
          onFocus={(e) => {
            setHasFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setHasFocus(false);
            onBlur?.(e);
          }}
        />
        {!!rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
        {secureTextEntry && (
          <ToogleEye onPress={() => setShowPassword((oldState) => !oldState)}>
            <EyeIcon
              style={{ tintColor: colors.placeholder.main }}
              source={
                showPassword
                  ? require("../../../assets/icons/openEye.png")
                  : require("../../../assets/icons/closeEye.png")
              }
            />
          </ToogleEye>
        )}
      </Content>
      {!!error && (
        <Error size={10} type="semiBold">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default Input;
