var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!blahblah');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

//go to PaaS -> Heroku -> Applications

//Try this (Later):
// Git -> remote -> fetch (if you need to get prev)
  //This leads to Git -> Merge 
    // Git -> remote -> Commit
      // Git -> remote -> push

//Try Now:
// Git -> Commit
  // Git -> remote -> push
