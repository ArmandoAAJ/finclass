import React, { useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../../components/Text";
import Banner from "./components/Banner";
import { data } from "./mock";
import IconLogo from "../../../assets/icons/logo/Vector.png";
import IconFinc from "../../../assets/icons/finclasses/finclasses.png";
import IconFincS from "../../../assets/icons/finseries/finseries.png";
import IconFincB from "../../../assets/icons/finbooks/finbooks.png";

import {
  BannerContainer,
  Container,
  Content,
  FinclassIcon,
  IconFin,
} from "./styles";
import {
  FlatList,
  NativeScrollEvent,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useTheme } from "styled-components";
import Steps from "./components/Steps";
import Separator from "../../components/Separator";
import Section from "./components/Section";
import LastWatched from "./components/LastWatched";
import Card from "./components/Card";

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
          scrollEventThrottle={16}
        >
          {data.map((i) => (
            <Banner
              key={i.desc}
              source={i.image}
              description={i.desc}
              presenter={i.title}
            />
          ))}
        </ScrollView>
        <Steps index={sliderPage} />
      </BannerContainer>
      <Separator height={45} />
      <Content>
        <Section
          leftNode={
            <Text type="bold" size={16} color={colors.placeholder.main}>
              Continue de onde parou
            </Text>
          }
        />
        <Separator height={15} />
        <LastWatched />
      </Content>
      <Separator height={30} />
      <Content>
        <Section
          leftNode={<IconFin resizeMode="contain" source={IconFinc} />}
        />
      </Content>
      <Separator height={30} />
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        data={data.reverse()}
        ItemSeparatorComponent={() => <Separator width={10} />}
        keyExtractor={(item) => `${item.desc}+${item.title}`}
        renderItem={({ item }) => (
          <Card
            source={item.image}
            title={item.title}
            description={item.desc}
          />
        )}
      />
      <Separator height={30} />
      <Content>
        <Section
          leftNode={<IconFin resizeMode="contain" source={IconFincS} />}
        />
      </Content>
      <Separator height={30} />
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        data={data.reverse()}
        ItemSeparatorComponent={() => <Separator width={10} />}
        keyExtractor={(item) => `${item.desc}+${item.title}`}
        renderItem={({ item }) => (
          <Card
            source={item.image}
            title={item.title}
            description={item.desc}
          />
        )}
      />
      <Separator height={30} />
      <Content>
        <Section
          leftNode={<IconFin resizeMode="contain" source={IconFincB} />}
        />
      </Content>
      <Separator height={30} />
      <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        data={data.reverse()}
        ItemSeparatorComponent={() => <Separator width={10} />}
        keyExtractor={(item) => `${item.desc}+${item.title}`}
        renderItem={({ item }) => (
          <Card
            source={item.image}
            title={item.title}
            description={item.desc}
          />
        )}
      />
      <Separator height={30} />
    </Container>
  );
};

export default Home;
