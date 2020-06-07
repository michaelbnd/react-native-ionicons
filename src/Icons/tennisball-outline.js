import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgTennisballOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={208}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        d="M461.43 271.44c-5.09.37-8.24.56-13.43.56-114.88 0-208-93.12-208-208 0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208 0 5.38-.61 14-.61 14"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgTennisballOutline;

