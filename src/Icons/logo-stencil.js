import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogoStencil(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M188.8 334.07h197.33L279.47 448H83.2zM512 199H106.61L0 313h405.39zM232.2 64h196.6L322.62 177.93H125.87z" />
    </Svg>
  );
}

export default SvgLogoStencil;

