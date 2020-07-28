import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgToday(props) { 
  const strokeWidth = props.strokeWidth ? props.strokeWidth : 32
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v288a64 64 0 0064 64h320a64 64 0 0064-64V128a64 64 0 00-64-64zM224 307.43A28.57 28.57 0 01195.43 336h-70.86A28.57 28.57 0 0196 307.43v-70.86A28.57 28.57 0 01124.57 208h70.86A28.57 28.57 0 01224 236.57zM448 136v20a4 4 0 01-4 4H68a4 4 0 01-4-4v-28a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32z" />
    </Svg>
  );
}

export default SvgToday;

