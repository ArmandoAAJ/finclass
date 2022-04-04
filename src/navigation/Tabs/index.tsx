import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import IconHome from "../../../assets/icons/home.png";
import IconDownload from "../../../assets/icons/download.png";
import IconBoxSearch from "../../../assets/icons/boxsearch.png";
import IconBoxMenu from "../../../assets/icons/boxmenu.png";
import Text from "../../components/Text";

import { Icon } from "./styles";
import Access from "../../pages/Access";
import Home from "../../pages/Home";
import Downloads from "../../pages/Downloads";
import Search from "../../pages/Search";
import Menu from "../../pages/Menu";

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
  function handleSizeTo80Percentage(size: number) {
    return size * 0.8;
  }

  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.background.onMain,
        tabBarInactiveBackgroundColor: colors.background.main,
        tabBarStyle: {
          backgroundColor: colors.backdrop.main,
          borderTopColor: colors.backdrop.main,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={IconHome}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              type="bold"
              size={8}
              color={color}
              style={{ paddingVertical: 5 }}
            >
              Início
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="downloads"
        component={Downloads}
        options={{
          title: "Baixar",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={IconDownload}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              type="bold"
              size={8}
              color={color}
              style={{ paddingVertical: 5 }}
            >
              Download
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={IconBoxSearch}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              type="bold"
              size={8}
              color={color}
              style={{ paddingVertical: 5 }}
            >
              Buscar
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Icon
              source={IconBoxMenu}
              size={handleSizeTo80Percentage(size)}
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              type="bold"
              size={8}
              color={color}
              style={{ paddingVertical: 5 }}
            >
              Menu
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
