import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgRadioOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={256.02} r={32} /><Path d="M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgRadioOutline;