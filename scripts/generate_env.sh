#!/bin/bash
set -e

# Install jq to traverse json
apt-get update && apt-get install jq -y -qq

echo "Getting latest Castopod version and package urls ..."

RELEASE_URL="https://code.castopod.org/api/v4/projects/2/releases"
CASTOPOD_VERSION=$(echo $(curl --silent https://code.castopod.org/api/v4/projects/2/releases | jq '.[0] | .tag_name') | tr -d '"')
LATEST_RELEASE_URL="https://code.castopod.org/api/v4/projects/2/releases/${CASTOPOD_VERSION}"
CASTOPOD_PACKAGE_URL=$(echo $(curl --silent ${LATEST_RELEASE_URL} | jq '.assets.links[].url' | grep -e '.zip' | tr -d '"')) 

echo "Done"

echo "Creating .env file ..."

echo PUBLIC_CASTOPOD_VERSION=${CASTOPOD_VERSION:1} > .env
echo PUBLIC_CASTOPOD_PACKAGE_URL=$CASTOPOD_PACKAGE_URL >> .env

echo "Done"
