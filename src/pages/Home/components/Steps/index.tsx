import React from "react";
import { View } from "react-native";
import Step from "./components/Step";
import { Props } from "./types";
import { Container } from "./styles";

const Steps = ({ index }: Props) => {
  return (
    <Container>
      <Step isActive={index === 0} />
      <Step isActive={index === 1} />
      <Step isActive={index === 2} />
    </Container>
  );
};

export default Steps;
