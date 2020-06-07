import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformationOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={40}
        d="M196 220h64v172"
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={40}
        d="M187 396h138"
      />
      <Path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" />
    </Svg>
  );
}

export default SvgInformationOutline;

