import React from "react";
import { useTheme } from "styled-components";

import { Container } from "./styles";
import { Props } from "./types";

const Text = ({
  size = 14,
  color,
  type = "regular",
  children,
  ...rest
}: Props) => {
  const { colors } = useTheme();
  return (
    <Container
      type={type}
      size={size}
      color={color || colors.background.onMain}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Text;
