import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {Image, View} from "react-native";
import {StackType} from "../../routes/types";

export const FeedInternal = () => {
  const route = useRoute<RouteProp<StackType>>();

  return (
    <View>
      {route?.params?.imageUrl && (
        <Image
          source={{uri: route?.params?.imageUrl}}
          style={{width: "100%", height: "100%", resizeMode: "contain"}}
        />
      )}
    </View>
  );
};
