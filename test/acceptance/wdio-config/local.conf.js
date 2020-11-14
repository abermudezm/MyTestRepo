const { config } = require("./wdio.conf.js");
const _ = require("lodash");

const localConfig = {
    specs: [
        './features/**/*.feature'
    ],
    // Here are all my 'dev' specific overrides:
    services: ['selenium-standalone'],
    logLevel: 'error', //verbose,
    utcOffSet: -5,
    maxInstances: 1,
    cucumberOpts: {
        tagExpression: '@scenario1',
    }
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(localConfig, config);
