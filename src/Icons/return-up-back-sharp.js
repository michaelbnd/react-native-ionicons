import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReturnUpBackSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M112 160l-64 64 64 64"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M64 224h400v128"
      />
    </Svg>
  );
}

export default SvgReturnUpBackSharp;

