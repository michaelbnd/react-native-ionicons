import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBedSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M432 224V96a16 16 0 00-16-16H96a16 16 0 00-16 16v128a48 48 0 00-48 48v160h36v-32h376v32h36V272a48 48 0 00-48-48zm-192 0H120v-32a16 16 0 0116-16h88a16 16 0 0116 16zm32-32a16 16 0 0116-16h88a16 16 0 0116 16v32H272z" />
    </Svg>
  );
}

export default SvgBedSharp;

