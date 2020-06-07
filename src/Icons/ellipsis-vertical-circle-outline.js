import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgEllipsisVerticalCircleOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={256} cy={256} r={26} />
      <Circle cx={256} cy={346} r={26} />
      <Circle cx={256} cy={166} r={26} />
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgEllipsisVerticalCircleOutline;

