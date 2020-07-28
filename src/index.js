import {Icons} from "./map"

export function Icon({name, size, color, fill, strokeWidth, style, borderWidth}) {
  return Icons[name]({
    height: size,
    width: size,
    fill,
    color,
    style,
    strokeWidth
   // borderWidth: borderWidth
  });
}
