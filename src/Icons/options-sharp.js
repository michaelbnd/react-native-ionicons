import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOptionsSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M381.25 112a48 48 0 00-90.5 0H48v32h242.75a48 48 0 0090.5 0H464v-32zM176 208a48.09 48.09 0 00-45.25 32H48v32h82.75a48 48 0 0090.5 0H464v-32H221.25A48.09 48.09 0 00176 208zM336 336a48.09 48.09 0 00-45.25 32H48v32h242.75a48 48 0 0090.5 0H464v-32h-82.75A48.09 48.09 0 00336 336z" />
    </Svg>
  );
}

export default SvgOptionsSharp;

