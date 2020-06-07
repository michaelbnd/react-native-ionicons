import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookmarksSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M112 0v48h304v368l48 32V0H112z" />
      <Path d="M48 80v432l168-124 168 124V80H48z" />
    </Svg>
  );
}

export default SvgBookmarksSharp;

