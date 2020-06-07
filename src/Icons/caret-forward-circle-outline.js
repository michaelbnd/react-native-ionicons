import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretForwardCircleOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M238.23 342.43l89.09-74.13a16 16 0 000-24.6l-89.09-74.13A16 16 0 00212 181.86v148.28a16 16 0 0026.23 12.29z" />
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </Svg>
  );
}

export default SvgCaretForwardCircleOutline;

