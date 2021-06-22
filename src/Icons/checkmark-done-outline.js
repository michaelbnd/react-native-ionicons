import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckmarkDoneOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284" /></Svg>;
}

export default SvgCheckmarkDoneOutline;