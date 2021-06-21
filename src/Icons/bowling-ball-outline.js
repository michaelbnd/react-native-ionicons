import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgBowlingBallOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Circle cx={256} cy={256} r={208} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} /><Circle cx={288} cy={200} r={24} /><Circle cx={296} cy={128} r={24} /><Circle cx={360} cy={168} r={24} /></Svg>;
}

export default SvgBowlingBallOutline;