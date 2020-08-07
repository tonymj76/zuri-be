setup:
	docker volume create nodemodules
	# creates docker volume for node_modules
	# make sure to run `make setup` before running any docker-compose command
dev:
	docker-compose up

install:
	docker-compose -f docker-compose.builder.yml run --rm install

build:
	docker-compose -f docker-compose.builder.yml run --rm build

test:
	docker-compose -f docker-compose.builder.yml run --rm test
	
all: setup install dev
	# run `make all` to setup docker volume for node_modules, install dependencies and run the application

update:
	git pull upstream develop
	yarn install
	yarn dev

login:
	curl -X POST -H "Content-Type: application/json" -d '{"email":"admin@example.com", "password":"password"}' http://localhost:5600/api/v1/auth
logout:
	curl -X GET -H "Content-Type: application/json" http://localhost:5600/api/v1/logout
loginlive:
	curl -X POST -H "Content-Type: application/json" -d '{"email":"admin@example.com", "password":"password"}' https://zuri-be.herokuapp.com/api/v1/auth