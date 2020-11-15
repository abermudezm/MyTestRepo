var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

exports.config = {
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    capabilities: [{
        unexpectedAlertBehaviour: 'accept',
        browserName: 'chrome',
        chromeOptions: {
            'w3c': false,
            // to run chrome headless the following flags are required
            // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            // args: ['--headless', '--disable-gpu'],
            prefs: {
                "download.default_directory": __dirname.substring(0, __dirname.lastIndexOf('/')) + "/downloaded_files/",
            }
        }
    }],
    sync: true,
    coloredLogs: true,
    deprecationWarnings: false,
    bail: 0,
    screenshotPath: './screenshots',    
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    seleniumInstallArgs: { version: '3.4.0' },
    seleniumArgs: { version: '3.4.0' },
    framework: 'cucumber',
    reporters: ['allure'],
    reporterOptions: {
        outputDir: './wdio-logs/',
        allure: {
            outputDir: './allure-results/allure/',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true
        }
    },
    cucumberOpts: {
        require: [
            './step_definitions/**/*.ts'
        ], // <string[]> (file/dir) require files before executing features
        backtrace: false, // <boolean> show full backtrace for errors
        compiler: ['ts:ts-node/register'], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true, // <boolean> disable colors in formatter output
        snippets: true, // <boolean> hide step definition snippets for pending steps
        source: true, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: false, // <boolean> fail if there are any undefined or pending steps
        tagExpression: 'not @wip', // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 500000, // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    onPrepare: function(config, capabilities) {
        console.log('||=============================||');
        console.log('|| CARNIVAL CRUISES AUTOMATION ||');
        console.log('||  https://www.carnival.com   ||');
        console.log('||=============================||');
        console.log('');
        console.log('Video for user story 1 automation at: ' + new Date());
        console.log('Some pauses were included to see the automation behavior');

        if (!fs.existsSync(`${__dirname}/../downloaded_files/`)) {
            fs.mkdirSync(`${__dirname}/../downloaded_files/`);
        }

    }
}