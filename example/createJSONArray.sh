#!/usr/bin/env bash
echo "[" > names.json
for file in $(find ../src/Icons -name '*.js' -not -name '*outline.js' -not -name '*sharp.js'|sort)
do
echo "  \"$(basename ${file%.js})\"," >> names.json
done
echo "]" >> names.json
