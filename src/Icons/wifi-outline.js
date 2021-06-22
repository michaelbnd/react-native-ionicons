import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWifiOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M332.41 310.59a115 115 0 00-152.8 0M393.46 249.54a201.26 201.26 0 00-274.92 0M447.72 182.11a288 288 0 00-383.44 0" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path d="M256 416a32 32 0 1132-32 32 32 0 01-32 32z" /></Svg>;
}

export default SvgWifiOutline;