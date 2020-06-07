import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlertCircleOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path
        d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
    </Svg>
  );
}

export default SvgAlertCircleOutline;

