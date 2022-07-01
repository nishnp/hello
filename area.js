#!/usr/bin/env node

const yargs = require("yargs");

yargs.scriptName("venus-cli")
    .usage('$0 <cmd> [args]')
    .command('date', ' ', (yargs) => {}, function (argv) {
        console.log(`Current Date: ${new Date()}`)
    })
    .help()
    .argv