import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrendingUp(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M352 144h112v112" /><Path d="M48 368l121.37-121.37a32 32 0 0145.26 0l50.74 50.74a32 32 0 0045.26 0L448 160" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgTrendingUp;