#!/usr/bin/env bash

SEL_STATUS_URL="http://0.0.0.0:4444/wd/hub/status"

# set -e: exit asap if a command exits with a non-zero status
set -e

echo "Waiting for Selenium Hub to be ready..."

SUCESS_CMD="jq .status | grep 0"

while ! curl -s "${SEL_STATUS_URL}" | sh -c "${SUCESS_CMD}"; do
  echo -n '.'
  sleep 0.1
done
echo "Done wait-selenium-hub.sh"
