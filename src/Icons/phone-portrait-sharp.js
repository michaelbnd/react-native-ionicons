import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhonePortraitSharp(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M382 0H130a18 18 0 00-18 18v476a18 18 0 0018 18h252a18 18 0 0018-18V18a18 18 0 00-18-18zM148 448V64h216v384z" />
    </Svg>
  );
}

export default SvgPhonePortraitSharp;

