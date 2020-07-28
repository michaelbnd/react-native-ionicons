import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPodiumSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M160 32h192v448H160zM384 192h112v288H384zM16 128h112v352H16z" />
    </Svg>
  );
}

export default SvgPodiumSharp;

