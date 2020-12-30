const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

  
const http = require('http'); 

// for (i = 3000; i <= 4000; i++) {
//     const optionRequestPort = {host:'127.0.0.1', port: i, path: '/ping'};

//     http.get(optionRequestPort, (res) => {

//         const { statusCode } = res;
//         const contentType = res.headers['content-type'];
      
//         let error;
//         if (statusCode !== 200) {
//           error = new Error('Request Failed.\n' +
//                             `Status Code: ${statusCode}`);
//         } else if (!/^application\/json/.test(contentType)) {
//           error = new Error('Invalid content-type.\n' +
//                             `Expected application/json but received ${contentType}`);
//         }
//         if (error) {
//           console.error(error.message);
//           res.resume();
//           return;
//           } else {
//               console.log(`le port trouver est ${optionRequestPort.port}`);
//           }
//       }).on('error', (e) => {});
// }

const scan = (port) => {
    http.get(`http://localhost:${port}/ping`, (res) => {
        res.setEncoding('utf-8');
        res.on('data', (chunk) => {
            console.log(chunk);


        });

    }).on('error', (e) => {
        console.error(`Got error: ${e.message} : ${e.port}`);
    });

}

for (let port = 3000; port > 4000; port++) {
    scan(port);
}