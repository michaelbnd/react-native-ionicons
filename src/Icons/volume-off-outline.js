import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolumeOffOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M237.65 192H168a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgVolumeOffOutline;

