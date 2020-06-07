const iconsMap = {
  "add": require("./src/Icons/add").default
}

export function Icon({name, size, color, borderWidth}) {
  return iconsMap[name]({
    height: size,
    width: size,
    fill: color,
   // borderWidth: borderWidth
  });
}