import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M80 160h352M80 256h352M80 352h352" /></Svg>;
}

export default SvgMenuOutline;