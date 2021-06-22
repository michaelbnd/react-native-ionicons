import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDown(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 268l144 144 144-144M256 392V100" /></Svg>;
}

export default SvgArrowDown;