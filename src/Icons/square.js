import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSquare(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z" />
    </Svg>
  );
}

export default SvgSquare;

