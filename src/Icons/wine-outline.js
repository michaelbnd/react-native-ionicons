import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWineOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160" fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Path fill="none" stroke={props.fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M352 432H160" /><Path fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} d="M112 160h288" /></Svg>;
}

export default SvgWineOutline;