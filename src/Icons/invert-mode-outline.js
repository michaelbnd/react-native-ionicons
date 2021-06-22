import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgInvertModeOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Circle fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} cx={256} cy={256} r={208} /><Path d="M256 176v160a80 80 0 010-160zM256 48v128a80 80 0 010 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48z" /></Svg>;
}

export default SvgInvertModeOutline;