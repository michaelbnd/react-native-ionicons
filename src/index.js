import {Icons} from "./map"

export function Icon({name, size, color, fill, strokeWidth, borderWidth}) {
  return Icons[name]({
    height: size,
    width: size,
    fill,
    color,
    strokeWidth
   // borderWidth: borderWidth
  });
}
