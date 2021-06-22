import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgEllipsisHorizontal(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Circle cx={256} cy={256} r={48} /><Circle cx={416} cy={256} r={48} /><Circle cx={96} cy={256} r={48} /></Svg>;
}

export default SvgEllipsisHorizontal;