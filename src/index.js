import {Icons} from "./map"

export function Icon({name, size, color, borderWidth}) {
  return Icons[name]({
    height: size,
    width: size,
    fill: color,
   // borderWidth: borderWidth
  });
}