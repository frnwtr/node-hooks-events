#!/usr/bin/env node

var program = require('commander');
var Hooks = require('../');


program
    .version('0.0.3')
    .usage('<apiKey>,<apiKey>,<apiKey>,... <title> <message>')
    .parse(process.argv);

if(!program.args.length) {
    return program.help();
}
var keys= program.args[0].split(',');
var hooks = new Hooks(keys);

hooks.send(program.args[1], program.args[2],function(err,result){
    if(!err){
        console.log('Message Sent\n',result);
    }else{
        console.log('Message NOT Sent\nError: ',err,'\nMessage Log: \n',result);
    }

});
