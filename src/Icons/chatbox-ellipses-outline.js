import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgChatboxEllipsesOutline(props) {
  return <Svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><Path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke={props.fill} strokeLinejoin="round" strokeWidth={32} /><Circle cx={160} cy={216} r={32} /><Circle cx={256} cy={216} r={32} /><Circle cx={352} cy={216} r={32} /></Svg>;
}

export default SvgChatboxEllipsesOutline;