import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={48} d="M144 144h320M144 256h320M144 368h320" /><Path fill="none" stroke={props.fill} strokeLinecap="square" strokeLinejoin="round" strokeWidth={32} d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z" /></Svg>;
}

export default SvgListSharp;