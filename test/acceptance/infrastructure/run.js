#! /usr/bin/env node

var shell = require('shelljs');
var config = require('config');
var _ = require('lodash');
const maxInstances = _.get(config, 'maxInstances');
shell.cd('infrastructure');
shell.exec('docker-compose -v');
shell.exec('docker-compose down');
shell.exec('docker-compose up -d --force-recreate');
if (maxInstances) shell.exec(`docker-compose scale chrome=${maxInstances}`);
shell.exec('docker-compose ps');
shell.exec('source ./wait-selenium.sh');
shell.cd('../');