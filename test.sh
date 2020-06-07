#!/usr/bin/env bash

rm example/*.tgz
npm pack
cp *.tgz example

cd example
npm i
npm i *.tgz
npm test
