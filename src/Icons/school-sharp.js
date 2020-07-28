import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSchoolSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" />
      <Path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" />
    </Svg>
  );
}

export default SvgSchoolSharp;

