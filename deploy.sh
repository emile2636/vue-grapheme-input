#!/usr/bin/env sh

# error
set -e

# build
npm run build

# cd dist 
cd dist

git init
git add -A
git commit -m 'deploy'

# deploy https://<USERNAME>.github.io/<REPO>
git push -f origin HEAD:gh-pages

cd -
