import styled from "styled-components/native";
import {space, SpaceProps, variant} from "styled-system";

export const CustomButton = styled.TouchableOpacity<SpaceProps>`
  background-color: purple;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  ${space}
  ${variant({
    variants: {
      primary: {
        bg: "purple",
      },
      secondary: {
        bg: "green",
      },
      ghost: {
        bg: "transparent",
      },
      icon: {
        bg: "purple",
        width: 40,
        height: 40,
      },
    },
  })}
`;

export const ButtonText = styled.Text`
  color: white;
`;
