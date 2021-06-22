import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgStarOutline;