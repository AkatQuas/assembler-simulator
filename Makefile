# Copyright 2020 The AkatQuas
#
# The old school Makefile, following are required targets. The Makefile is written
# to allow building multiple images. You are free to add more targets or change
# existing implementations, as long as the semantics are preserved.
#
#
# The makefile is also responsible to populate project version information.
#

#
# Tweak the variables based on your project.
#

# Current version of the project.

VERSION_BY_DATE = $(shell date +v"%Y%m%d")
USER_ID=$(shell id -u)
CURRENT_DIR = $(shell pwd)

#
# These variables should not need tweaking.
#

#
# Define all targets. At least the following commands are required:
#

SHELL:=/bin/bash
.DEFAULT_GOAL:=help
TARGETS = help groupdhelp list-help start-web publish-example clean


.SILENT: $(TARGETS)

# All targets.
.PHONY:  $(TARGETS)

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \n  make help \033[36m\033[0m\n\nTargets:\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

groupdhelp:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

list-help: ## List all commands
	awk -F":.*##" '/^[a-zA-Z0-9_-]+:.*?##/ { printf $$1 " " }' $(MAKEFILE_LIST) | pbcopy

##@ Development
start-web: ## development locally
	npm run start

##@ Publish
publish-example: ## publish the build to gh-pages
	sh -c './scripts/deploy.sh'

##@ Cleanup

clean: ## Cleanup the project folders
	$(info Cleaning up things)
