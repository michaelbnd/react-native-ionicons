import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgTabletLandscapeOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Rect x={80} y={16} width={352} height={480} rx={48} ry={48} transform="rotate(-90 256 256)" fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></Svg>;
}

export default SvgTabletLandscapeOutline;