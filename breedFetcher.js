const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    
    if (error) {
      console.log(error);
      return error;
    }
  
    const data = JSON.parse(body);
    console.log(response);

    if (data.length === 0) {
      errMsg = `Breed ${breedName} not found`;
      callback(errMsg, null);
    } else {
      callback(null, data[0].description);
    }
     
  });
};
const callback = function (errMsg, body){
  if(errMsg){
    console.log(errMsg);
  } else{
    console.log(body);
  }

}
fetchBreedDescription('kalu', callback);

module.exports = fetchBreedDescription ;