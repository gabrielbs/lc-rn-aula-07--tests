import styled from "styled-components/native";
import {
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";

type BoxType = SpaceProps & PositionProps & FlexboxProps;

export const Box = styled.View<BoxType>`
  ${space}
  ${position}
  ${flexbox}
`;
