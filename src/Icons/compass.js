import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCompass(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={256} r={24} /><Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm105.07 113.33l-46.88 117.2a64 64 0 01-35.66 35.66l-117.2 46.88a8 8 0 01-10.4-10.4l46.88-117.2a64 64 0 0135.66-35.66l117.2-46.88a8 8 0 0110.4 10.4z" /></Svg>;
}

export default SvgCompass;