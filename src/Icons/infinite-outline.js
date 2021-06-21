import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInfiniteOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} /></Svg>;
}

export default SvgInfiniteOutline;