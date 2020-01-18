install:
	yarn install

run: install
	yarn run start

clean:
	rm -rf build/*

build: install
	yarn build

deploy: clean build
	cp -R build/* docs/
	git add docs
	git commit -m "Deploy `git rev-parse --verify HEAD`"
	git push origin master
 
