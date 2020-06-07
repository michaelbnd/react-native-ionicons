import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwapVerticalOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96"
      />
    </Svg>
  );
}

export default SvgSwapVerticalOutline;

