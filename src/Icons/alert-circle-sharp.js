import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlertCircleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path fill={props.fill} d="M240 304h32l6-160h-44l6 160z" />
      <Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z" />
    </Svg>
  );
}

export default SvgAlertCircleSharp;

