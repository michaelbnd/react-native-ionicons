import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBasketSharp(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M339.2 217.6L256 106.67 172.8 217.6l-25.6-19.2 96-128a16 16 0 0125.6 0l96 128z" />
      <Path d="M441.59 192H70.41a12 12 0 00-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 00441.59 192zM256 351.66A37.71 37.71 0 11293.89 314 37.88 37.88 0 01256 351.66z" />
    </Svg>
  );
}

export default SvgBasketSharp;

