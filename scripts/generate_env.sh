#!/bin/bash
set -e

# Install jq to traverse json
apt-get update && apt-get install jq -y -qq

echo "Getting latest Castopod version and package urls ..."

RELEASE_URL="https://code.castopod.org/api/v4/projects/2/releases"
CASTOPOD_VERSION=$(echo $(curl --silent https://code.castopod.org/api/v4/projects/2/releases | jq '.[0] | .tag_name') | tr -d '"')
LATEST_RELEASE_URL="https://code.castopod.org/api/v4/projects/2/releases/${CASTOPOD_VERSION}"
CASTOPOD_PACKAGE_URL_1=$(echo $(curl --silent ${LATEST_RELEASE_URL} | jq '.assets.links[0].url') | tr -d '"')
CASTOPOD_PACKAGE_URL_2=$(echo $(curl --silent ${LATEST_RELEASE_URL} | jq '.assets.links[1].url') | tr -d '"')

echo "Done"

echo "Creating .env file ..."

echo PUBLIC_CASTOPOD_VERSION=${CASTOPOD_VERSION:1} > .env

if [[ "$CASTOPOD_PACKAGE_URL_1" == *.zip ]]
then
    echo PUBLIC_CASTOPOD_PACKAGE_URL=$CASTOPOD_PACKAGE_URL_1 >> .env
else
    echo PUBLIC_CASTOPOD_PACKAGE_URL=$CASTOPOD_PACKAGE_URL_2 >> .env
fi

echo "Done"
