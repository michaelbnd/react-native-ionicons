import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCafeOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M368 80h64a16 16 0 0116 16v34a46 46 0 01-46 46h-34M96 80h272v192a80 80 0 01-80 80H176a80 80 0 01-80-80V80h0zM64 416h336"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgCafeOutline;

