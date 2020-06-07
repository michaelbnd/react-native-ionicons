import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRepeatSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M320 120l48 48-48 48"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M352 168H64v96M192 392l-48-48 48-48"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M160 344h288v-96"
      />
    </Svg>
  );
}

export default SvgRepeatSharp;

