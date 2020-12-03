const fs = require('fs');
const request = require('request');
const readline = require('readline');
const args = process.argv.slice(2);
const website = args[0];
const filepath = args[1];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(website, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the homepage.
  fs.writeFile(filepath, body, function(err){
    if (err) throw err;
    console.log('Downloaded and saved 3261 bytes to ./index.html')
    });
});

