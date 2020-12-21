#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/1393679430/1393679430.github.io.git main

cd -
