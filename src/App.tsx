import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {LogBox} from "react-native";

import {SafeAreaView} from "react-native-safe-area-context";
import {Feed} from "./features/feed";
import {FeedInternal} from "./features/feedInternal";
import {Routes} from "./routes";

// https://api.unsplash.com/photos/?client_id=eroauhNFSRgaJ0ywQBDb8UnKJ6_je9AK0A--6WNuPN8

// TODO: Transformar Header em component
// TODO: Transformar o Profile em component

export default function App() {
  React.useEffect(() => {
    LogBox.ignoreLogs(["deprecated-react-native-prop-types"]);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes />
      <StatusBar />
    </SafeAreaView>
  );
}
