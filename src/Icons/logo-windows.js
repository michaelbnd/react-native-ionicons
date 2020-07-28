import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoWindows(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M480 265H232v179l248 36V265zM216 265H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z" />
    </Svg>
  );
}

export default SvgLogoWindows;

