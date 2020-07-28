import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlbumsSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M128 64h256v32H128zM96 112h320v32H96zM464 448H48V160h416z" />
    </Svg>
  );
}

export default SvgAlbumsSharp;

