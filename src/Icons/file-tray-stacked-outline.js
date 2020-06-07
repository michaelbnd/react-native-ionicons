import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileTrayStackedOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path
        d="M48 336v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M48 336h144M320 336h144M192 336a64 64 0 00128 0"
      />
      <Path
        d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96L432 72c-5-27-23-40-48-40z"
        fill="none"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M48 192h144M320 192h144M192 192a64 64 0 00128 0"
      />
    </Svg>
  );
}

export default SvgFileTrayStackedOutline;

