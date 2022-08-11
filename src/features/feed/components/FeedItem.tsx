import React from "react";
import styled from "styled-components/native";
import {position, space, SpaceProps, variant} from "styled-system";
import LottieView from "lottie-react-native";
import {TouchableOpacity} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackType} from "../../../routes/types";
import {ButtonText, CustomButton} from "../../../ds/CustomButton";
import {Box} from "../../../ds/Box";

type TFeedItem = {
  imageUrl: string;
};
export const FeedItem = ({imageUrl}: TFeedItem) => {
  const likeAnimation = React.useRef<LottieView>();
  const navigation = useNavigation<NavigationProp<StackType>>();

  const handleLike = () => {
    likeAnimation?.current?.play();
  };

  return (
    <Box width="50%" marginBottom={30} borderWidth={1} borderColor="white">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("feedInternal", {
            imageUrl,
          })
        }
      >
        <Box position="absolute" zIndex={1} width="100%" height={150}>
          <LottieView
            ref={likeAnimation}
            loop={false}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../../assets/like.json")}
          />
        </Box>
        <StyledImage source={{uri: imageUrl}} />

        <Box flexDirection="row" justifyContent="space-between" marginTop={10}>
          <CustomButton variant="primary" onPress={() => handleLike()}>
            <ButtonText>Curtir</ButtonText>
          </CustomButton>
          <CustomButton variant="secondary">
            <ButtonText>Compartilhar</ButtonText>
          </CustomButton>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const StyledImage = styled.Image`
  width: 100%;
  height: 150;
`;
