node-hooks
==========
[![npm version](https://badge.fury.io/js/node-hooks-events.png)](http://badge.fury.io/js/node-hooks-events) [![Build Status](https://travis-ci.org/frnwtr/node-hooks-events.svg)](https://travis-ci.org/frnwtr/node-hooks-events)

[![NPM](https://nodei.co/npm/node-hooks-events.png)](https://nodei.co/npm/node-hooks-events/)

node wrapper for http://hooks.events

GET your copy of hooks.events on the site

INSTALL
=======

npm install node-hooks-events -save


USAGE
=====

```
var Hooks = require('node-hooks-events');

var hooks = new Hooks(appKey); //fill with given appkey from the app

// or if is an array of Api Keys
var hooks = new Hooks([
  appKey_1,
  appKey_2,
  ...
]);
```

send a message
```
hooks.send('title', 'message', callback(err,response));
```
that's it

Responses
=========

If there is an error:
```
  err: <message>,
  {
    hooksTitle: '<title>',
    hooksMessage: '<message>',
    hookID: '<uuid of the hook request>',
    hooksApi: '<ref to appKey>',
    sent: false
  }
```

If request is ok:
```
  err:null,
  {
    hooksTitle: '<title>',
    hooksMessage: '<message>',
    hookID: '<uuid of the hook request>',
    hooksApi: '<ref to appKey>',
    sent: true
  }
```

BIN command:
============
```
hooks <apiKey>,<apiKey>,<apiKey>,... <title> <message>
```
