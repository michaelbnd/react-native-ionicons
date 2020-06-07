import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCellularSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M496 432h-96V80h96zM368 432h-96V160h96zM240 432h-96V224h96zM112 432H16V288h96z" />
    </Svg>
  );
}

export default SvgCellularSharp;

