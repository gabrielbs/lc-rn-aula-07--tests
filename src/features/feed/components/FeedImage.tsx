import React from "react";
import {ScrollView} from "react-native";
import {Box} from "../../../ds/Box";
import {CustomText} from "../../../ds/CustomText";
import {ImageEndpoint} from "../../../services";
import {FeedItem} from "./FeedItem";

type FeedImageProps = {
  images: ImageEndpoint[];
  title: string;
};

export const FeedImage = ({images, title}: FeedImageProps) => {
  return (
    <ScrollView>
      <Box padding={15}>
        <CustomText variant="large">{title}</CustomText>
        <Box width="100%" marginTop={3} flexDirection="row" flexWrap="wrap">
          {images.map((image) => {
            return <FeedItem key={image.id} imageUrl={image.urls.full} />;
          })}
        </Box>
      </Box>
    </ScrollView>
  );
};
