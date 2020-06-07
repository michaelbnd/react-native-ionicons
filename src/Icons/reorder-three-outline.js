import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderThreeOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M96 256h320M96 176h320M96 336h320"
      />
    </Svg>
  );
}

export default SvgReorderThreeOutline;

