import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgLogoFigma(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z" /><Circle cx={336} cy={256} r={80} /></Svg>;
}

export default SvgLogoFigma;