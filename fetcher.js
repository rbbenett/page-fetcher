const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const website = args[0];
const filepath = args[1];

request(website, (error, response, body) => {
  if(error || response.status > 400) console.log(error);
  console.log('statusCode: ', response && response.statusCode);
  if (!filepath) {
    console.log('file parameter is required');
    return;
  } else {
    fs.writeFile(filepath, body, function(err){
      let bytes = 0;
      const lines = body.split('\n');
      for(const line of lines) {
        bytes += Buffer.byteLength(line + '\n', 'utf8');
      }
      if (err) throw err;
      console.log(`Downloaded and saved ${bytes} to ${filepath}`);
      return
      });
  }
});

