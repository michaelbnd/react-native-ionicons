import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkDoneSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={44}
        d="M465 127L241 384l-92-92M140 385l-93-93M363 127L236 273"
      />
    </Svg>
  );
}

export default SvgCheckmarkDoneSharp;

