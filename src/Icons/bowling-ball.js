import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBowlingBall(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM288 224a24 24 0 1124-24 24 24 0 01-24 24zm8-72a24 24 0 1124-24 24 24 0 01-24 24zm64 40a24 24 0 1124-24 24 24 0 01-24 24z" /></Svg>;
}

export default SvgBowlingBall;