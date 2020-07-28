import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUmbrellaOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M256 272v160a32 32 0 01-32 32h0a32 32 0 01-32-32M464 272c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0196 0h0a78.28 78.28 0 01102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 01368 272h0a67.88 67.88 0 0196 0zM256 64V48"
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}

export default SvgUmbrellaOutline;

