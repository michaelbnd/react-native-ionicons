#!/usr/bin/env bash

# Convert the svg icons to js
npm i -g @svgr/cli
for file in $1/*.svg
do
	echo "$(basename ${file%.svg}.js)"
	svgr --native --icon $file > "$(basename ${file%.svg}.js)"
done

# Create a require map
