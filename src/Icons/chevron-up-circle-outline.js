import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronUpCircleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M352 296l-96-96-96 96" /><Path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgChevronUpCircleOutline;