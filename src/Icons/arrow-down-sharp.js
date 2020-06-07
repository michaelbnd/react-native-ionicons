import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M112 268l144 144 144-144M256 392V100"
      />
    </Svg>
  );
}

export default SvgArrowDownSharp;

