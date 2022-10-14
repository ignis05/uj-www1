# abort on errors
set -e
# clear dist
rm -rf dist
# build
ng build
# navigate into the build output directory
cd dist/uj-www1
git init
git add -A
git commit -m 'deploy through script'
git push -f git@github.com:ignis05/uj-www1.git master:gh-pages
cd -
