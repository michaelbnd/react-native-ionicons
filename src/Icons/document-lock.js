import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDocumentLock(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" {...props}><Path d="M288 192h129.81a2 2 0 001.41-3.41L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16zM256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z" /><Path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160a32 32 0 01-32 32h-96a32 32 0 01-32-32v-48a32 32 0 0132-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0132 32z" /></Svg>;
}

export default SvgDocumentLock;