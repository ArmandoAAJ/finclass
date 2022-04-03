import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
import Text from "./components/Text";
import Separator from "./components/Separator/index";
import BackButton from "./components/BackButton";
import Dots from "./components/Dots";
import Input from "./components/Input/Index";

const App = () => {
  return (
    <>
      <Separator width={0} height={100} />
      <Input error="ghf" rightIcon leftIcon secureTextEntry name="Senha" />
    </>
  );
};

export default App;
