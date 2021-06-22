import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReorderFourOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M96 304h320M96 208h320M96 112h320M96 400h320" /></Svg>;
}

export default SvgReorderFourOutline;