import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVolumeMediumSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z" />
      <Path
        d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112"
        fill="none"
        stroke="#000"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgVolumeMediumSharp;

