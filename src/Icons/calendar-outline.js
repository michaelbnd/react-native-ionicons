import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

function SvgCalendarOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={48}
        y={80}
        width={416}
        height={384}
        rx={48}
        ry={48}
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path d="M397.82 80H114.18C77.69 80 48 110.15 48 147.2V208h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-60.8c0-37.05-29.69-67.2-66.18-67.2z" />
      <Circle cx={296} cy={232} r={24} />
      <Circle cx={376} cy={232} r={24} />
      <Circle cx={296} cy={312} r={24} />
      <Circle cx={376} cy={312} r={24} />
      <Circle cx={136} cy={312} r={24} />
      <Circle cx={216} cy={312} r={24} />
      <Circle cx={136} cy={392} r={24} />
      <Circle cx={216} cy={392} r={24} />
      <Circle cx={296} cy={392} r={24} />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M128 48v32M384 48v32"
      />
    </Svg>
  );
}

export default SvgCalendarOutline;

