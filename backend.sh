#!/usr/bin/env bash

# Starts Location, Auth and Gateway
cd ../tmt-backend && sbt ";tmt-backend/run start -c --auth"

# Starts Location, Config, Auth and Gateway with metrics enabled
# cd ../tmt-backend && sbt ";tmt-backend/run start -c --config --auth -g --metrics"
