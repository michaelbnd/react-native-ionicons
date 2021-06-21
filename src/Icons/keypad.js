import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeypad(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M256 400a48 48 0 1048 48 48 48 0 00-48-48zM256 272a48 48 0 1048 48 48 48 0 00-48-48zM256 144a48 48 0 1048 48 48 48 0 00-48-48zM256 16a48 48 0 1048 48 48 48 0 00-48-48zM384 272a48 48 0 1048 48 48 48 0 00-48-48zM384 144a48 48 0 1048 48 48 48 0 00-48-48zM384 16a48 48 0 1048 48 48 48 0 00-48-48zM128 272a48 48 0 1048 48 48 48 0 00-48-48zM128 144a48 48 0 1048 48 48 48 0 00-48-48zM128 16a48 48 0 1048 48 48 48 0 00-48-48z" /></Svg>;
}

export default SvgKeypad;