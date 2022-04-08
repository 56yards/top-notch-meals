install:
	npm install

docker:
	docker compose up

lint:
	(cd api && npm run lint)

unit-test:
	(cd api && npm run test)

test:
	(cd e2e && npm run e2e)