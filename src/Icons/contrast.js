import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrast(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 32A224 224 0 0097.61 414.39 224 224 0 10414.39 97.61 222.53 222.53 0 00256 32zM64 256c0-105.87 86.13-192 192-192v384c-105.87 0-192-86.13-192-192z" />
    </Svg>
  );
}

export default SvgContrast;

