import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

function SvgImagesSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Ellipse cx={373.14} cy={219.33} rx={46.29} ry={46} fill={props.fill} />
      <Path d="M80 132v328a20 20 0 0020 20h392a20 20 0 0020-20V132a20 20 0 00-20-20H100a20 20 0 00-20 20zm293.14 41.33a46 46 0 11-46.28 46 46.19 46.19 0 0146.28-46zm-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33zm368.27 0H259l144.58-144L480 370.59z" />
      <Path d="M20 32A20 20 0 000 52v344a20 20 0 0020 20h28V100a20 20 0 0120-20h380V52a20 20 0 00-20-20z" />
    </Svg>
  );
}

export default SvgImagesSharp;

