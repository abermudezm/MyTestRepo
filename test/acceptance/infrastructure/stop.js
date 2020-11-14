#! /usr/bin/env node

var shell = require('shelljs');

shell.cd('infrastructure');
shell.exec('docker-compose down');
shell.exec('docker-compose ps');
shell.cd('../');