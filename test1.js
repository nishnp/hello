#!/usr/bin/env node

var myVar2 = require('./emmisions')
const yargs = require('yargs/yargs')
const { hideBin }  = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log("Result:",
    ('hi ra' + argv['transportation-method']))
console.log('shivudu',argv.distance)
console.log(myVar2.main(argv['transportation-method'],argv['distance'],argv['unit-of-distance'],argv['output']))
//console.log(myVar2.trans(argv.ships));