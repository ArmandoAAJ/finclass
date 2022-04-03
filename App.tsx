import { useFonts } from "expo-font";
import { fonts } from "./src/styles/fonts";
import App from "./src";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";

export default function Main() {
  const [isLoadingFontes] = useFonts(fonts);

  if (!isLoadingFontes) return <></>;
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
