import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCard(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <Path d="M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z" />
    </Svg>
  );
}

export default SvgCard;

