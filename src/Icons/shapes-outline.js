import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShapesOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
      />
    </Svg>
  );
}

export default SvgShapesOutline;

