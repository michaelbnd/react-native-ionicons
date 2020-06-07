import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOptions(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M64 144h226.75a48 48 0 0090.5 0H448a16 16 0 000-32h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32zM448 368h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32h226.75a48 48 0 0090.5 0H448a16 16 0 000-32zM448 240H221.25a48 48 0 00-90.5 0H64a16 16 0 000 32h66.75a48 48 0 0090.5 0H448a16 16 0 000-32z" />
    </Svg>
  );
}

export default SvgOptions;

