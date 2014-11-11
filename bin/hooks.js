#!/usr/bin/env node

var program = require('commander');
var Hooks = require('../');


program
    .version('0.0.1')
    .usage('[options] <apikey> <title> <message>')
    .parse(process.argv);

if(!program.args.length) {
    return program.help();
}

var hooks = new Hooks(program.args[0]);

hooks.send(program.args[1], program.args[2],function(err,result){});
