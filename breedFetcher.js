const request = require('request');
const breedName = process.argv[2];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, response, body) => {
    
  if (error) {
    console.log(error);
    return error;
  }

  const data = JSON.parse(body);
  console.log(data);
  if (data.length === 0) {
    console.log("breed not found");
  }
   
});