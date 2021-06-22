import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnlinkOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={36} /></Svg>;
}

export default SvgUnlinkOutline;