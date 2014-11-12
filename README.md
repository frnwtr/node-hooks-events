node-hooks
==========
[![npm version](https://badge.fury.io/js/node-hooks-events.png)](http://badge.fury.io/js/node-hooks-events) [![Build Status](https://travis-ci.org/frnwtr/node-hooks-events.svg)](https://travis-ci.org/frnwtr/node-hooks-events)

node wrapper for http://hooks.events

GET your copy of hooks.events on the site

INSTALL
=======

npm install node-hooks-events -save


USAGE
=====

var Hooks = require('node-hooks-events');

var hooks = new Hooks(appKey); //fill with given appkey from the app

hooks.send('title', 'message', callback(err,response));

that's it
