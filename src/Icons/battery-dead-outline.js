import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgBatteryDeadOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={31}
        y={144}
        width={400}
        height={224}
        rx={45.7}
        ry={45.7}
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M479 218.67v74.66"
      />
    </Svg>
  );
}

export default SvgBatteryDeadOutline;

