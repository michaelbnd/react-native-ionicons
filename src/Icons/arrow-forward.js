import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowForward(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M268 112l144 144-144 144M392 256H100" /></Svg>;
}

export default SvgArrowForward;