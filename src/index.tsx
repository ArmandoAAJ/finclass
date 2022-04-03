import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
import Text from "./components/Text";
import Separator from "./components/Separator/index";
import BackButton from "./components/BackButton";
import Dots from "./components/Dots";

const App = () => {
  return (
    <>
      <Separator width={0} height={100} />
      <Button textType="semiBold" title="Tete" />
      <Separator width={0} height={100} />
      <BackButton />
      <Separator width={0} height={100} />
      <Dots amount={4} />
    </>
  );
};

export default App;
