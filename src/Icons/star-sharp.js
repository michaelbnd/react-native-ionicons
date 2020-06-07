import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z" />
    </Svg>
  );
}

export default SvgStarSharp;

