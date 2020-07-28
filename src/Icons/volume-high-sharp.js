import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolumeHighSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" />
    </Svg>
  );
}

export default SvgVolumeHighSharp;

