import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

function SvgCalculatorOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Rect
        x={112}
        y={48}
        width={288}
        height={416}
        rx={32}
        ry={32}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M160.01 112H352v64H160.01z"
      />
      <Circle cx={168} cy={248} r={24} />
      <Circle cx={256} cy={248} r={24} />
      <Circle cx={344} cy={248} r={24} />
      <Circle cx={168} cy={328} r={24} />
      <Circle cx={256} cy={328} r={24} />
      <Circle cx={168} cy={408} r={24} />
      <Circle cx={256} cy={408} r={24} />
      <Rect x={320} y={304} width={48} height={128} rx={24} ry={24} />
    </Svg>
  );
}

export default SvgCalculatorOutline;

