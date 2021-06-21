import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCropOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M144 48v272a48 48 0 0048 48h272" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path d="M368 304V192a48 48 0 00-48-48H208M368 368v96M144 144H48" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgCropOutline;