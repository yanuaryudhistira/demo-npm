const http = require("http");

const HOST = "localhost";
const PORT = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("hello server live update");
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("something bad happened", err);
  } else {
    console.log(`server is listening on ${HOST}:${PORT}`);
  }
});

// const _ = require("lodash");
// const R = require("ramda");
//
// let randomText = "ThIs iS A RAndom TExt";
//
// randomText = _.toLower(randomText);
// console.log(randomText);
//
// randomText = _.startCase(randomText);
// console.log(randomText);
//
// const add = R.add(1,2);
// console.log(`using add (ramda) : ${add}`);
