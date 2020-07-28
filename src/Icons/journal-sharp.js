import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgJournalSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M290 32H104a24 24 0 00-24 24v400a24 24 0 0024 24h186zM408 32h-58v448h58a24 24 0 0024-24V56a24 24 0 00-24-24z" />
    </Svg>
  );
}

export default SvgJournalSharp;

