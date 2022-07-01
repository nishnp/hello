#!/usr/bin/env node

var myVar2 = require('./emmisions')
const yargs = require('yargs')


yargs.command({
    command: 'co2-calculator',
    describe: 'CO2 emission calculator',
    builder: {
        'transportation-method': {
            describe: 'Transportation method',
            demandOption: true,  // Required
            type: 'string'
        },
        'distance': {
            describe: 'Distance',
            demandOption: true,
            type: 'number'
        },
        'unit-of-distance': {
            describe: 'Unit of distance',
            demandOption: false,
            type: 'string'
        },
        'output': {
            describe: 'Output',
            demandOption: false,
            type: 'string'
        },
    },

    // Function for your command
    handler(argv) {

        return myVar2.main(argv['transportation-method'],argv['distance'],argv['unit-of-distance'],argv['output'])
    }
})

yargs.parse()   // To set above changes

