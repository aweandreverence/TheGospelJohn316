install:
	yarn install

build:
	yarn build

clean:
	rm -rf build/*

deploy:
	cp -R build/* docs/
	git add docs
	git commit -m "Deploy `git rev-parse --verify HEAD`"
	git push origin master

