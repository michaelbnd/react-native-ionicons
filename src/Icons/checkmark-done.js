import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkDone(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284"
      />
    </Svg>
  );
}

export default SvgCheckmarkDone;

