import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStop(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M392 432H120a40 40 0 01-40-40V120a40 40 0 0140-40h272a40 40 0 0140 40v272a40 40 0 01-40 40z" />
    </Svg>
  );
}

export default SvgStop;

