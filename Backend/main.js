'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const router = require("./router/Router")
const mongoose = require("mongoose")
const fs = require('fs').promises;
let indexFile = "";
require('dotenv').config()
//mongoose.connect(process.env.DATABASE).then(r => console.log("connected"))

const server = http.createServer((req, res) => { 
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
    console.log(router)
    router(req,res,indexFile)
});

console.log(__dirname)
  fs.readFile(__dirname + "\\index.html")
  .then(contents => {
      indexFile = contents;
      server.listen(port, hostname, () => {
          console.log(`Server is running on http://${hostname}:${port}`);
      });
      
  })
  .catch(err => {
      console.error(`Could not read index.html file: ${err}`);
      process.exit(1);
  });