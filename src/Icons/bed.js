import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBed(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M432 230.7a79.44 79.44 0 00-32-6.7H112a79.51 79.51 0 00-32 6.69A80.09 80.09 0 0032 304v112a16 16 0 0032 0v-8a8.1 8.1 0 018-8h368a8.1 8.1 0 018 8v8a16 16 0 0032 0V304a80.09 80.09 0 00-48-73.3zM376 80H136a56 56 0 00-56 56v72a4 4 0 005.11 3.84A95.5 95.5 0 01112 208h4.23a4 4 0 004-3.55A32 32 0 01152 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h24.46a4 4 0 004-3.55A32 32 0 01304 176h56a32 32 0 0131.8 28.45 4 4 0 004 3.55h4.2a95.51 95.51 0 0126.89 3.85A4 4 0 00432 208v-72a56 56 0 00-56-56z" />
    </Svg>
  );
}

export default SvgBed;

