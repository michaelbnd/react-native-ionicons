import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgJournal(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M290 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h146zM368 32h-18v448h18a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64z" />
    </Svg>
  );
}

export default SvgJournal;

