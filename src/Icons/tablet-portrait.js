import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTabletPortrait(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M384 512H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64zM128 32a32 32 0 00-32 32v384a32 32 0 0032 32h256a32 32 0 0032-32V64a32 32 0 00-32-32z" />
      <Path d="M384 0a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256M128 480h256a32 32 0 0032-32V64a32 32 0 00-32-32H128a32 32 0 00-32 32v384a32 32 0 0032 32m0-16a16 16 0 01-16-16V64a16 16 0 0116-16h256a16 16 0 0116 16v384a16 16 0 01-16 16z" />
    </Svg>
  );
}

export default SvgTabletPortrait;

