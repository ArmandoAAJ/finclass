import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
import Text from "./components/Text";
import Separator from "./components/Separator/index";

const App = () => {
  return (
    <>
      <Separator width={0} height={100} />
      <Button textType="semiBold" title="Tete" />
    </>
  );
};

export default App;
