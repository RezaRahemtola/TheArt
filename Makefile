BUILD_PATH			=		.
PORT				=		3000

all:	build start

build:
	@echo "🚧 Installing dependencies..."
	yarn --cwd front/

start:
	@echo "🚀 Starting The Art..."
	yarn --cwd front/ start

.PHONY:	all build start
