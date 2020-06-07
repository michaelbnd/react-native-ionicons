import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwapHorizontal(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"
      />
    </Svg>
  );
}

export default SvgSwapHorizontal;

