import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenu(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M88 152h336M88 256h336M88 360h336"
      />
    </Svg>
  );
}

export default SvgMenu;

