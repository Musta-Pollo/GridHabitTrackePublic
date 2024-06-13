.PHONY: clean build-android-preview

clean:
	sudo rm -rf /private/var/folders/*

build-android-preview:
	npm i && npx eas build --platform android --profile preview --local
build-android-production:
	npm i && npx eas build --platform android --profile production --local