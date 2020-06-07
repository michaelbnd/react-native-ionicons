import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilterSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M16 120h480v48H16zM96 232h320v48H96zM192 344h128v48H192z" />
    </Svg>
  );
}

export default SvgFilterSharp;

