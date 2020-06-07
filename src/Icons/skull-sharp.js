import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkullSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208zm-88 320a56 56 0 1156-56 56.06 56.06 0 01-56 56zm51.51 64L244 320h24l24.49 80zM344 336a56 56 0 1156-56 56.06 56.06 0 01-56 56zm104 32z" />
    </Svg>
  );
}

export default SvgSkullSharp;
