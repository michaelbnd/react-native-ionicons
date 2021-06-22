#!/usr/bin/env bash

if [ -z "$1" ]
  then
    >&2 echo "Usage"
    >&2 echo -e "\t$0 folder"
    >&2 echo "folder"
    >&2 echo -e "\tFolder with lots of svg"
    exit 1
fi
printf "\e[1m\e[92mConverting the svg icons to jsx...\e[0m\n"
mkdir Icons
npx @svgr/cli --native --icon --no-prettier --filename-case kebab --replace-attr-values "#000={props.fill}" -d Icons $1
rm Icons/index.js

printf "\e[1m\e[92mCreating the map...\e[0m\n"
echo "const base = \"./Icons/\";" > map.js
echo >> map.js
echo "export const Icons = {" >> map.js
for file in Icons/*.js
do
  base_name=$(basename ${file%.js})
  echo $base_name
  echo "  \"$base_name\": require(base + \"$base_name\").default," >> map.js
done
echo "};" >> map.js