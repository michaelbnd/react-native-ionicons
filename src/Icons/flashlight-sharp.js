import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

function SvgFlashlightSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M330 16l-42.68 42.7L453.3 224.68 496 182 330 16z" />
      <Ellipse cx={224.68} cy={287.3} rx={20.03} ry={19.96} fill={props.fill} />
      <Path d="M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z" />
    </Svg>
  );
}

export default SvgFlashlightSharp;

