var request = require('request');

var Hooks = function(apiKey) {
  if (!apiKey) {
    throw new Error("Key is needed to make an api call");
  }
  this.base = "http://hooks.events/hooks/";
  this.apiKey = apiKey;
};

module.exports = Hooks;


Hooks.prototype.send=function(hooksTitle,hooksMessage,cb){
  request.post(this.base + "post.php", {
        form: {
          "hooksTitle":hooksTitle,
          "hooksMessage":hooksMessage,
          "hooksApi":this.apiKey
        }
    }, cb);
};
