const axios = require('axios');
const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

function getArtInfo () {
  return axios.get(`${BASE_URL}42069`)
    .then(res => res.data)
    .catch(error => console.error(error));
}

module.exports = getArtInfo;