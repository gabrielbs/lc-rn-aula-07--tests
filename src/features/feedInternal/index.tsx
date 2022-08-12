import React from "react";
import {Image, View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";

import {StackType} from "../../routes/types";
import {ButtonText, CustomButton} from "../../ds/CustomButton";

type FeedInternalProps = {
  onShare: () => void;
};
export const FeedInternal = ({onShare}: FeedInternalProps) => {
  const route = useRoute<RouteProp<StackType>>();

  return (
    <View>
      {route?.params?.imageUrl && (
        <Image
          accessibilityHint={"Imagem do feed em fullscreen"}
          source={{uri: route?.params?.imageUrl}}
          style={{width: "100%", height: "100%", resizeMode: "contain"}}
        />
      )}
      <CustomButton onPress={() => onShare()}>
        <ButtonText>Compartilhar</ButtonText>
      </CustomButton>
    </View>
  );
};
