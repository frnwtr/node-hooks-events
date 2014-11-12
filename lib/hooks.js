var request = require('request');
var uuid = require('node-uuid');

var Hooks = function(apiKey) {
  if (!apiKey) {
    throw new Error("Key is needed to make an api call");
  }
  this.base = "http://hooks.events/hooks/";
  this.apiKey = apiKey;
};

module.exports = Hooks;

Hooks.prototype.postMessage=function(key,message,cb){
  message.hooksApi=key;
  message.sent=false;
  request.post(this.base+"post.php", {
        form: {
          "hooksTitle":message.hooksTitle,
          "hooksMessage":message.hooksMessage,
          "hooksApi":message.hooksApi
        }
    }, function(err,response){
      if(response.body==='found'){
        message.sent=true;
      }else{
        if(!err){
          err=response.body;
        }
      }
      return cb(err,message);
    });
  };

Hooks.prototype.create=function(hooksTitle,hooksMessage){
  return {
    "hooksTitle":hooksTitle,
    "hooksMessage":hooksMessage,
    "hookID":uuid.v1()
  };
};

Hooks.prototype.send=function(hooksTitle,hooksMessage,cb){
  var message=this.create(hooksTitle,hooksMessage);
  if(this.apiKey instanceof Array) {
    for (var i in this.apiKey){
      this.postMessage(this.apiKey[i],message,cb);
    }
  }else{
    this.postMessage(this.apiKey,message,cb);
  }
};
