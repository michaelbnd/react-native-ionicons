import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCodeWorkingSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={26}
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={10}
      />
      <Circle
        cx={346}
        cy={256}
        r={26}
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={10}
      />
      <Circle
        cx={166}
        cy={256}
        r={26}
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={10}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={42}
        d="M160 368L32 256l128-112M352 368l128-112-128-112"
      />
    </Svg>
  );
}

export default SvgCodeWorkingSharp;

