import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowBackSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M244 400L100 256l144-144M120 256h292"
      />
    </Svg>
  );
}

export default SvgArrowBackSharp;

