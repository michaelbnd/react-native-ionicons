import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReturnDownBackSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M112 352l-64-64 64-64"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M64 288h400V160"
      />
    </Svg>
  );
}

export default SvgReturnDownBackSharp;

