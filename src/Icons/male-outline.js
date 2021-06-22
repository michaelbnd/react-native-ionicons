import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgMaleOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={216} cy={296} r={152} fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M448 160V64h-96M324 188L448 64" /></Svg>;
}

export default SvgMaleOutline;