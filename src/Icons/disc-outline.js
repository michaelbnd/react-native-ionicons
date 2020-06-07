import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgDiscOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={208}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Circle
        cx={256}
        cy={256}
        r={96}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Circle cx={256} cy={256} r={32} />
    </Svg>
  );
}

export default SvgDiscOutline;

