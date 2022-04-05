import React, { useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../../components/Text";
import Banner from "./components/Banner";
import { data } from "./mock";
import IconLogo from "../../../assets/icons/logo/Vector.png";
import { BannerContainer, Container, FinclassIcon } from "./styles";
import {
  NativeScrollEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useTheme } from "styled-components";
import Steps from "./components/Steps";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  const [sliderPage, setSliderPage] = useState(0);

  const setSliderPageEvent = useCallback(
    (event: { nativeEvent: NativeScrollEvent }) => {
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextSxreen = Math.ceil(x / width);
      if (indexOfNextSxreen !== sliderPage) {
        setSliderPage(indexOfNextSxreen);
      }
    },
    [sliderPage]
  );

  return (
    <Container>
      <BannerContainer>
        <FinclassIcon top={top} source={IconLogo} />
        <ScrollView
          onScroll={(e) => setSliderPageEvent(e)}
          decelerationRate={"fast"}
          snapToInterval={width}
          snapToAlignment="center"
          bounces={false}
          horizontal
          alwaysBounceHorizontal={false}
          pagingEnabled
          scrollEventThrottle={8}
        >
          <Banner
            source={data[2].image}
            description={data[2].desc}
            presenter={data[2].title}
          />
          <Banner
            source={data[2].image}
            description={data[2].desc}
            presenter={data[2].title}
          />
          <Banner
            source={data[2].image}
            description={data[2].desc}
            presenter={data[2].title}
          />
        </ScrollView>
        <Steps index={sliderPage} />
      </BannerContainer>
    </Container>
  );
};

export default Home;
