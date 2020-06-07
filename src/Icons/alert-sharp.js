import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlertSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M240 80l8 240h16l8-240h-32zM240 400h32v32h-32z"
      />
    </Svg>
  );
}

export default SvgAlertSharp;

