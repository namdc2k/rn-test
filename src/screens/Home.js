import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import News from "./News";
import Personal from "./Personal";
import Community from "./Community";

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (focused) color = "#4792e6";
          if (route.name === "Căn Hộ") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Tin Tức") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Cộng Đồng") {
            iconName = focused ? "globe-sharp" : "globe-outline";
          } else {
            iconName = focused ? "person-sharp" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000020",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Căn Hộ" component={HomeScreen} />
      <Tab.Screen name="Tin Tức" component={News} />
      <Tab.Screen name="Cộng Đồng" component={Community} />
      <Tab.Screen name="Cá Nhân" component={Personal} />
    </Tab.Navigator>
  );
}
export default function Home() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
