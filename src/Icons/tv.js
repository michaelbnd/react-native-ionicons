import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTv(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z" /><Path stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M128 416h256" /></Svg>;
}

export default SvgTv;