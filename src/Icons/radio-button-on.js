import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgRadioButtonOn(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke={props.fill} strokeMiterlimit={10} strokeWidth={32} /><Circle cx={256} cy={256} r={144} /></Svg>;
}

export default SvgRadioButtonOn;