import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBalloonOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 11316.53-44.49z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Path d="M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke={props.fill} strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M266.71 368.21l-9.17 49.61 63.31-8.9-22.49-45.16-31.65 4.45z" /></Svg>;
}

export default SvgBalloonOutline;