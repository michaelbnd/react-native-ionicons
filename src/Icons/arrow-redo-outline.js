import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRedoOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgArrowRedoOutline;

