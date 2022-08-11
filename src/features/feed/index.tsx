import React from "react";
import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {fetcher, ImageEndpoint} from "../../services";
import {CustomText} from "../../ds/CustomText";
import {Highlight} from "./components/Highligh";
import {StoryItem} from "./components/StoryItem";
import {FeedItem} from "./components/FeedItem";
import {FeedImage} from "./components/FeedImage";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const stories = ["Programação", "Lorem", "Ipsum", "Aulas", "Javascript"];

const Tab = createMaterialTopTabNavigator();

export const Feed = () => {
  const [images, setImages] = React.useState<ImageEndpoint[]>([]);

  React.useEffect(() => {
    fetcher("photos").then(setImages);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View style={styles.profilePic}>
            <Highlight width={100} height={100} />
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.profileStatus}>
              <View style={styles.profileStatusText}>
                <CustomText fontWeight="bold">114</CustomText>
                <CustomText>publicações</CustomText>
              </View>
              <View style={styles.profileStatusText}>
                <CustomText fontWeight="bold">43.4K</CustomText>
                <CustomText>seguidores</CustomText>
              </View>
              <View style={styles.profileStatusText}>
                <CustomText fontWeight="bold">1</CustomText>
                <CustomText>seguindo</CustomText>
              </View>
            </View>
            <CustomText>Let's Code</CustomText>
            <CustomText>Escola de programação</CustomText>
          </View>
        </View>
        <ScrollView
          horizontal
          style={styles.storyWrapperScrollView}
          contentContainerStyle={styles.storyWrapper}
        >
          {stories.map((story) => (
            <StoryItem key={story}>
              <Text>{story}</Text>
            </StoryItem>
          ))}
        </ScrollView>
        <Tab.Navigator>
          <Tab.Screen name="images">
            {() => <FeedImage images={images} title="Feed de imagens" />}
          </Tab.Screen>
          <Tab.Screen name="reels">
            {() => <FeedImage images={images} title="REELS" />}
          </Tab.Screen>
          <Tab.Screen name="videos">
            {() => <FeedImage images={images} title="Feed de vídeos" />}
          </Tab.Screen>
        </Tab.Navigator>
        {/* <FeedImage images={images} title="Feed de imagens" /> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 40,
    justifyContent: "center",
  },
  profileStatus: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 15,
  },
  profileStatusText: {
    alignItems: "center",
  },
  profilePic: {
    width: "30%",
  },
  profileInfo: {
    width: "70%",
  },
  storyWrapperScrollView: {
    flexGrow: 0,
  },
  storyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
