import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInformationSharp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="square" strokeMiterlimit={10} strokeWidth={40} d="M196 220h64v172M187 396h138" /><Path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" /></Svg>;
}

export default SvgInformationSharp;