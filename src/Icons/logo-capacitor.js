import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoCapacitor(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M480 101.09L372.37 208.72l106.86 107.06-69.3 69.3-283.22-283.23L196 32.54l107.07 106.88L410.67 32zM32.55 196l69.3-69.31 283.22 283.24-69.3 69.3-107-106.87L101.08 480 32 410.67l107.42-107.61z" />
    </Svg>
  );
}

export default SvgLogoCapacitor;

