node-hooks
==========

node wrapper for http://hooks.events


INSTALL
=======

npm install node-hooks -save


USAGE
=====

var Hooks = require('node-hooks');

var hooks = new Hooks(appKey);

hooks.send('title', 'message', callback);

that's it
