#!/usr/bin/env bash

rm example/*.tgz
npm pack
mv *.tgz example

cd example
npm uninstall @michaelbnd/react-native-ionicons
npm i
npm i *.tgz
npm test
