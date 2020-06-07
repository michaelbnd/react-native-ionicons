import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatboxSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M128 464v-80H56a24 24 0 01-24-24V72a24 24 0 0124-24h400a24 24 0 0124 24v288a24 24 0 01-24 24H245.74zM456 80z" />
    </Svg>
  );
}

export default SvgChatboxSharp;

