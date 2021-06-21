import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEggOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M256 48C192 48 96 171.69 96 286.55S160 464 256 464s160-62.59 160-177.45S320 48 256 48z" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgEggOutline;