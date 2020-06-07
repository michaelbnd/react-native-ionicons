import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilmSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M480 80H32v352h448zM112 352v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm0-80v48H64v-48zm256 160H144v-32h224zm80 80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48zm0-80v48h-48v-48z" />
    </Svg>
  );
}

export default SvgFilmSharp;

