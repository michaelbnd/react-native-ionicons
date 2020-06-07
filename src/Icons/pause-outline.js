import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPauseOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M176 96h16v320h-16zM320 96h16v320h-16z"
      />
    </Svg>
  );
}

export default SvgPauseOutline;

