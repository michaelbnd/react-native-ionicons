import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatboxEllipsesSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M456 48H56a24 24 0 00-24 24v288a24 24 0 0024 24h72v80l117.74-80H456a24 24 0 0024-24V72a24 24 0 00-24-24zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zM456 80z" />
    </Svg>
  );
}

export default SvgChatboxEllipsesSharp;

