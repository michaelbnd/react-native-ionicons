import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgPhonePortraitOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={128} y={16} width={256} height={480} rx={48} ry={48} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><Path d="M176 16h24a8 8 0 018 8h0a16 16 0 0016 16h64a16 16 0 0016-16h0a8 8 0 018-8h24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgPhonePortraitOutline;