import {Text} from "react-native";
import styled from "styled-components/native";
import {typography, TypographyProps, variant, VariantArgs} from "styled-system";

const textVariants = {
  xlarge: {
    fontSize: 28,
  },
  large: {
    fontSize: 24,
  },
  regular: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
};

type CustomTextType = {variant: keyof typeof textVariants};

export const CustomText = styled(Text)<TypographyProps & CustomTextType>`
  ${typography}
  ${variant({
    prop: "variant",
    variants: textVariants,
  })}
`;
