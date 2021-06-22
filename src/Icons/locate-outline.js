import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLocateOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M256 96V56M256 456v-40" /><Path d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M416 256h40M56 256h40" /></Svg>;
}

export default SvgLocateOutline;