import React, { useMemo } from "react";
import { View } from "react-native";

import { ContainerDots, Dot } from "./styles";
import { Props } from "./types";

const Dots = ({ amount }: Props) => {
  const listDots = useMemo(() => {
    return Array(amount).fill(0, 0, amount);
  }, [amount]);
  return (
    <ContainerDots amount={amount}>
      {listDots.map((_, index) => (
        <Dot key={`${index}-dot`} />
      ))}
    </ContainerDots>
  );
};

export default Dots;
