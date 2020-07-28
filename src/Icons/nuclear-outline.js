import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgNuclearOutline(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={192}
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={256}
        cy={256}
        r={64}
        fill={props.fill}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
      <Path
        fill={props.fill}
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="M224 192L171 85M288 192l53-107M327.55 255.81l119.41.13M299.09 313.13l72.25 95.06M184.45 255.81l-119.41.13M212.91 313.13l-72.25 95.06"
      />
    </Svg>
  );
}

export default SvgNuclearOutline;

