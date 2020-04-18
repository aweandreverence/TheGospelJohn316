help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## install - install dependency packages
install:
	yarn install

## run - run the React Native app server
run: install
	yarn run start

## clean - clean previous builds
clean:
	rm -rf build/*

## build - build the app for release
build: install
	yarn build

## deploy - build and deploy the app
deploy: clean build
	cp -R build/* docs/
	git add docs
	git commit -m "Deploy `git rev-parse --verify HEAD`"
	git push origin master
