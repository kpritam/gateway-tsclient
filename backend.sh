#!/usr/bin/env bash

# Starts Location, Auth and Gateway
cd ../tmt-backend && sbt ";tmt-backend/run start --csw-args --auth"

# Starts Location, Config, Auth and Gateway with metrics enabled
# cd ../tmt-backend && sbt ";tmt-backend/run start --csw-args --config --auth --gateway-args --metrics"
