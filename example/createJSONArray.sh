#!/usr/bin/env bash
echo "[" > names.json
for file in ../src/Icons/*.js
do
echo "  \"$(basename ${file%.js})\"," >> names.json
done
echo "]" >> names.json
