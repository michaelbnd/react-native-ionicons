import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlbums(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M368 96H144a16 16 0 010-32h224a16 16 0 010 32zM400 144H112a16 16 0 010-32h288a16 16 0 010 32zM419.13 448H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z" />
    </Svg>
  );
}

export default SvgAlbums;

