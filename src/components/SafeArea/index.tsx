import React from "react";
import { View } from "react-native";
import { Props } from "./types";

import { Container } from "./styles";

const SafeArea = ({ color }: Props) => {
  return <Container color={color} />;
};

export default SafeArea;
