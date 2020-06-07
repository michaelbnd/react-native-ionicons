import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgGitCommitOutline(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={96}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 256H48M464 256H352"
      />
    </Svg>
  );
}

export default SvgGitCommitOutline;

