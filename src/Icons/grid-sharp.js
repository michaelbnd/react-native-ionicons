import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGridSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M240 240H32V32h208zM480 240H272V32h208zM240 480H32V272h208zM480 480H272V272h208z" />
    </Svg>
  );
}

export default SvgGridSharp;

