#!/usr/bin/env bash
set -e # Exit with nonzero exit code if anything fails

START_TIME=$SECONDS

source ./start-xvfb.sh

  # Overwrite default "./mvnw test" so that the integration tests are executed as well.
./mvnw verify -Dwebdriver.base.url=${FRONTEND_URL}

ELAPSED_TIME=$(($SECONDS - $START_TIME))
echo "Acceptance test Build & test duration: $ELAPSED_TIME seconds"
