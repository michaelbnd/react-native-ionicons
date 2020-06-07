import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTriangle(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z" />
    </Svg>
  );
}

export default SvgTriangle;

