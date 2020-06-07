import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryHalfSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M17 384h432V128H17zm32-224h368v192H49z" />
      <Path d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z" />
    </Svg>
  );
}

export default SvgBatteryHalfSharp;

