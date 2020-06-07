import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCartSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle cx={176} cy={416} r={32} />
      <Circle cx={400} cy={416} r={32} />
      <Path d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z" />
    </Svg>
  );
}

export default SvgCartSharp;

