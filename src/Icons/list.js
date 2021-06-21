import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgList(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M160 144h288M160 256h288M160 368h288" /><Circle cx={80} cy={144} r={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={80} cy={256} r={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Circle cx={80} cy={368} r={16} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgList;