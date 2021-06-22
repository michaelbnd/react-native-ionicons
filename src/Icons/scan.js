import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScan(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M342 444h46a56 56 0 0056-56v-46M444 170v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46M68 170v-46a56 56 0 0156-56h46" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={44} /></Svg>;
}

export default SvgScan;