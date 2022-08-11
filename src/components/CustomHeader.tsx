import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import React from "react";
import {TouchableOpacity} from "react-native";
import {Box} from "../ds/Box";
import {CustomText} from "../ds/CustomText";

export const CustomHeader = (props: NativeStackHeaderProps) => {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={10}
    >
      {props.navigation.canGoBack && (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <CustomText variant="xlarge">{"<"}</CustomText>
        </TouchableOpacity>
      )}
      <Box width="100%" alignItems="center">
        <CustomText variant="large">{props.route.name}</CustomText>
      </Box>
    </Box>
  );
};
