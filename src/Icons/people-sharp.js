import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgPeopleSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={152} cy={184} r={72} />
      <Path d="M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34z" />
      <Path d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96z" />
      <Circle cx={340} cy={168} r={88} />
    </Svg>
  );
}

export default SvgPeopleSharp;

