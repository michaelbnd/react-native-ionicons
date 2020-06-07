import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRepeat(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M320 120l48 48-48 48"
      />
      <Path
        d="M352 168H144a80.24 80.24 0 00-80 80v16M192 392l-48-48 48-48"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M160 344h208a80.24 80.24 0 0080-80v-16"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgRepeat;

