import { TextInputProps } from "react-native";

export interface Props extends TextInputProps {
  name?: string;
  error?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export interface InputStyleProps {
  borderColor: string;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}
