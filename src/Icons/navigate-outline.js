import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigateOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M448 64L64 240.14h200a8 8 0 018 8V448z" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgNavigateOutline;